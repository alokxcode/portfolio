---
title: Building an HTTP Server from Raw TCP in Go
date: 2024-10-05
tags: [Go, Networking, Systems]
summary: How I built a fully functional HTTP/1.1 server library on top of raw TCP sockets — no net/http allowed.
---

# Building an HTTP Server from Raw TCP in Go

Most Go developers reach for `net/http` without a second thought. It's great! But I wanted to understand what's *actually* happening when a client sends a request. So I built `httpfromtcp` — an HTTP server library with no standard library HTTP usage whatsoever.

## The Rules

1. Use `net.Listen` and `net.Conn` only — no `net/http`
2. Parse raw bytes off the wire manually
3. Handle the full request/response cycle

## Parsing HTTP/1.1

An HTTP/1.1 request looks like this on the wire:

```
GET /hello HTTP/1.1\r\n
Host: localhost:8080\r\n
Connection: keep-alive\r\n
\r\n
```

Parsing this meant:
- Reading bytes until `\r\n\r\n` (end of headers)
- Splitting on `\r\n` to get header lines
- Parsing the request line separately (method, path, version)
- Handling `Content-Length` to read bodies correctly

## Building the Router

I kept the router simple — a map of `method+path` → handler function. Each handler receives a parsed `Request` and writes to a `ResponseWriter` that buffers the response before flushing it to the connection.

```go
srv.Handle("GET", "/hello", func(w *http.ResponseWriter, r *http.Request) {
    w.WriteStatus(200)
    w.WriteHeader("Content-Type", "text/plain")
    w.WriteBody([]byte("hello world"))
})
```

## What I Learned

- HTTP is simpler than it looks — the spec is readable
- `keep-alive` connections are surprisingly tricky (you can't just close after one request)
- Go's `io.Reader` interface is *really* well designed for this kind of parsing

Check out the [repo on GitHub](https://github.com/alokxcode/httpfromtcp) if you want to poke around.

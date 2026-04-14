---
title: Why I Chose Systems (and Why It's Worth It)
date: 2024-12-17
tags: [University, Systems, Internships]
summary: Insights into why I chose to pursue systems as a concentration for my CS degree.
---

# Why I Chose Systems (and Why It's Worth It)

When I was deciding on a concentration, everyone around me seemed to be gravitating toward machine learning or web dev. Both totally valid paths. But I kept getting pulled toward something lower — the stuff *under* the abstractions everyone else was happily ignoring.

## What Even Is "Systems"?

Systems programming broadly covers:

- Operating systems (processes, memory, concurrency)
- Networking (TCP/IP, sockets, protocols)
- Compilers and runtimes
- Distributed systems

It's the layer between your code and the hardware. The part that makes everything else *possible*.

## Why It's Hard (and Why That's the Point)

Systems work is unforgiving. Segfaults don't give you helpful stack traces. Race conditions don't always reproduce. You have to actually understand what the machine is doing — there's no framework to hide behind.

That difficulty is exactly what attracted me to it. Writing a Go program that implements HTTP from raw TCP sockets, or building a distributed file system that replicates data across nodes — these things *forced* me to understand fundamentals that most developers take for granted.

## What It's Given Me

- **Debugging superpowers**: When something breaks at a higher level, I usually know *why* in a way that saves hours.
- **Better API design**: Understanding the cost of abstractions makes you write better ones.
- **Confidence**: Nothing quite builds confidence like shipping something that works at the metal level.

## Worth It?

100%. Even if you don't end up writing kernel modules for a living, systems knowledge makes you a better engineer everywhere else.

If you're on the fence — take the OS course. Write the shell. Build the allocator. You'll thank yourself later.

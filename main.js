/* ============================================================
   PIXEL ART NAME RENDERER + misc JS
   ============================================================ */

// ---------------------
// Pixel font bitmap — 5×7 per character, 1 = filled cell
// Letters: A L O K  (space between words = 3px gap col)
// ---------------------
const PIXEL_FONT = {
  'A': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  'L': [
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
  ],
  'O': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  'K': [
    [1,0,0,0,1],
    [1,0,0,1,0],
    [1,0,1,0,0],
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ],
  ' ': null, // treated as gap
};

function renderPixelName(canvasId, text, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const CELL  = options.cell  || 8;   // px per pixel cell
  const GAP   = options.gap   || 2;   // gap between cells
  const LGAP  = options.lgap  || 12;  // gap between letters
  const SGAP  = options.sgap  || 20;  // gap for space char
  const ROWS  = 7;
  const COLOR = options.color || getComputedStyle(document.documentElement)
                                  .getPropertyValue('--pixel-color').trim() || '#4cff6a';

  const chars = text.toUpperCase().split('');

  // Calculate total width
  let totalW = 0;
  chars.forEach((ch, i) => {
    if (ch === ' ') {
      totalW += SGAP;
    } else {
      totalW += 5 * (CELL + GAP) - GAP;
      if (i < chars.length - 1 && chars[i+1] !== ' ') totalW += LGAP;
      else if (i < chars.length - 1) totalW += 0; // space handles its own gap
    }
  });

  const totalH = ROWS * (CELL + GAP) - GAP;

  const DPR = window.devicePixelRatio || 1;
  canvas.width  = totalW * DPR;
  canvas.height = totalH * DPR;
  canvas.style.width  = totalW + 'px';
  canvas.style.height = totalH + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(DPR, DPR);

  ctx.clearRect(0, 0, totalW, totalH);

  let x = 0;
  chars.forEach((ch, i) => {
    if (ch === ' ') {
      x += SGAP;
      return;
    }
    const bitmap = PIXEL_FONT[ch];
    if (!bitmap) { x += SGAP; return; }

    // Draw each cell
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < 5; col++) {
        if (bitmap[row][col]) {
          const cx = x + col * (CELL + GAP);
          const cy = row * (CELL + GAP);
          ctx.fillStyle = COLOR;
          ctx.fillRect(cx, cy, CELL, CELL);
        }
      }
    }

    x += 5 * (CELL + GAP) - GAP + LGAP;
  });
}

// ---------------------
// Run on load
// ---------------------
document.addEventListener('DOMContentLoaded', () => {
  // Render pixel name on index page
  if (document.getElementById('pixel-name')) {
    const isMobile = window.innerWidth < 600;
    renderPixelName('pixel-name', 'ALOK', {
      cell:  isMobile ? 10 : 18,
      gap:   isMobile ? 2  : 4,
      lgap:  isMobile ? 14 : 28,
    });
  }

  // Highlight active nav section on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // Smooth external link open (blog back button)
  const backBtn = document.getElementById('blog-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      // already an <a>, default behavior is fine
    });
  }

  // Subtle cursor blink effect on terminal prompts
  document.querySelectorAll('.terminal-prompt').forEach(el => {
    el.innerHTML = el.textContent + '<span class="cursor">▋</span>';
  });
});

// Redraw on resize
window.addEventListener('resize', () => {
  if (document.getElementById('pixel-name')) {
    const isMobile = window.innerWidth < 600;
    renderPixelName('pixel-name', 'ALOK', {
      cell:  isMobile ? 10 : 18,
      gap:   isMobile ? 2  : 4,
      lgap:  isMobile ? 14 : 28,
    });
  }
});

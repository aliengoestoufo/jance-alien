/* ==========================================================
   PLANET ALIEN — main.js
   Runs on every page: highlights the active nav link, draws
   the starfield background, and types out the terminal line.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  startStarfield();
  startTypewriter();
});

function highlightActiveNav() {
  const links = document.querySelectorAll('nav.navigation a');
  let current = window.location.pathname.split('/').pop();
  if (!current) current = 'index.html';
  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
}

function startStarfield() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.floor((canvas.width * canvas.height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.3,
      speed: reduceMotion ? 0 : Math.random() * 0.25 + 0.05,
      twinkle: Math.random() * Math.PI * 2
    }));
  }

  function draw() {
    ctx.fillStyle = '#060907';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      if (!reduceMotion) s.twinkle += 0.02;
      const alpha = Math.max(0.15, 0.35 + Math.sin(s.twinkle) * 0.35);
      ctx.beginPath();
      ctx.fillStyle = `rgba(77, 255, 138, ${alpha})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

function startTypewriter() {
  const target = document.getElementById('typedText');
  if (!target) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Edit these lines to change what the terminal "types" on every page.
  const lines = [
    'ESTABLISHING UPLINK...',
    'WELCOME TO MY TRANSMISSION LOG',
    'STAY CURIOUS, EARTHLING'
  ];

  if (reduceMotion) {
    target.textContent = lines[1];
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      target.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        setTimeout(() => { deleting = true; tick(); }, 1400);
        return;
      }
    } else {
      charIndex--;
      target.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? 30 : 55);
  }

  tick();
}

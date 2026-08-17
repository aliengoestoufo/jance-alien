/* ==========================================================
   PLANET ALIEN — lightbox.js
   Powers the favorites gallery: click a poster to maximize
   it in a popup, then browse with the arrows, the keyboard
   (left / right / escape), or by clicking outside the image.
   Only runs on pages that actually have a .gallery element.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  if (!items.length) return;

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  const images = items.map(item => {
    const img = item.querySelector('img');
    return { src: img.src, title: img.dataset.title || img.alt || '' };
  });

  let currentIndex = 0;

  function updateLightbox() {
    const current = images[currentIndex];
    lightboxImage.src = current.src;
    lightboxImage.alt = current.title;
    lightboxCaption.textContent = current.title;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
    // Keyboard support for anyone tabbing through the gallery.
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Click the dark backdrop (not the image itself) to close.
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});

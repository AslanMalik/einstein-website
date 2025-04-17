// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
  
  // Fact and E=mc² toggles
  document.getElementById('fact-toggle').addEventListener('click', () => {
    const fact = document.getElementById('fact');
    fact.classList.toggle('hidden');
    fact.setAttribute('aria-hidden', fact.classList.contains('hidden'));
  });
  
  document.getElementById('emc2-button').addEventListener('click', () => {
    const explanation = document.getElementById('emc2-explanation');
    explanation.classList.toggle('hidden');
    explanation.setAttribute('aria-hidden', explanation.classList.contains('hidden'));
  });
  
  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', debounce(() => {
    backToTop.classList.toggle('hidden', window.scrollY < 300);
  }, 100));
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Sticky header
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', debounce(() => {
    header.classList.toggle('sticky', window.scrollY > 100);
  }, 50));
  
  // Lightbox for gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryImages = document.querySelectorAll('.gallery-img');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.remove('hidden');
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.focus();
    });
  });
  
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
  
  // Keyboard accessibility for lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
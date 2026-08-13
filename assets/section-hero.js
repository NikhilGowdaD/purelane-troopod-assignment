document.querySelectorAll('[data-hero-carousel]').forEach(function (carousel) {
  var slides = carousel.querySelectorAll('.hslide');
  var dots = carousel.querySelectorAll('.hdots button');
  if (slides.length < 2) return;

  var current = 0;
  var timer = null;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('on', i === index);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle('on', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    current = index;
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      showSlide(i);
      resetTimer();
    });
  });

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    if (!reduceMotion) {
      timer = setInterval(nextSlide, 4500);
    }
  }

  resetTimer();
});

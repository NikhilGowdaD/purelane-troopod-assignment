document.querySelectorAll('[data-reviews-track]').forEach(function (track) {
  // pause the marquee when a card inside receives keyboard focus,
  // so keyboard users aren't reading text that's sliding away from them
  track.addEventListener('focusin', function () {
    track.classList.add('paused');
  });
  track.addEventListener('focusout', function () {
    track.classList.remove('paused');
  });
});

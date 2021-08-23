(function () {
  const slides = [
    '<img src="img/honey-production.svg" alt="Honey Production">',
    '<img src="img/honey-shop.svg" alt="Honey Shop">',
    '<img src="img/supplements.svg" alt="Supplements">',
    '<img src="img/beekeeping-classes.svg" alt="Beekeeping Classes">',
  ];
  let currentSlideIdx = 0;
  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      ".carousel-honey-icons .slide"
    );
    slideContainer.innerHTML = slides[currentSlideIdx];
  }
  function nextSlide() {
    currentSlideIdx++;
    if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
    showCurrentSlide();
  }
  setInterval(nextSlide, 3000);
  showCurrentSlide();
})();

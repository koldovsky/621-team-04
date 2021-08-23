(function () {
  const slides = [
    {
     const productsJSON = ` [
    {
        "id": "1",
        "name": "Honey Production",
        "description": "We produce, bottle, and sell honey harvested by our beekeepers.",
        "link": "Learn more",
        "imgUrl": "img/honey-production.svg"
    },
    {
        "id": "2",
        "name": "Supplements",
        "description": "We offer over 10 types of organic raw honey in our online store.",
        "link": "Learn more",
        "imgUrl": "img/honey-shop.svg"
    },
    {
        "id": "3",
       "name": "Honey Production",
        "description": "You can buy bee pollen, propolis, and hive mixtures.",
        "link": "Learn more",
        "imgUrl": "img/supplements.svg"
    },
    {
        "id": "4",
       "name": "Honey Production",
        "description": "Feel free to book excursions and workshops at our swaths.",
        "link": "Learn more",
        "imgUrl": "img/beekeeping-classes.svg"
    }
   ]`; 
   }
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

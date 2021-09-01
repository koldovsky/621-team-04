// (function () {
//   const servicesJSON = ` [
//     {
//         "id": "1",
//         "name": "Honey Production",
//         "description": "We produce, bottle, and sell honey harvested by our beekeepers.",
//         "link": "Learn more",
//         "imgUrl": "img/honey-production.svg"
//     },
//     {
//         "id": "2",
//         "name": "Supplements",
//         "description": "We offer over 10 types of organic raw honey in our online store.",
//         "link": "Learn more",
//         "imgUrl": "img/honey-shop.svg"
//     },
//     {
//         "id": "3",
//        "name": "Honey Production",
//         "description": "You can buy bee pollen, propolis, and hive mixtures.",
//         "link": "Learn more",
//         "imgUrl": "img/supplements.svg"
//     },
//     {
//         "id": "4",
//        "name": "Honey Production",
//         "description": "Feel free to book excursions and workshops at our swaths.",
//         "link": "Learn more",
//         "imgUrl": "img/beekeeping-classes.svg"
//     }
//    ]`;

//   const services = JSON.parse(servicesJSON);
//   let servicesHTML = [];
//   function showServices(services) {
//     const allServices = [...services];
//     for (const service of allServices) {
//       servicesHTML.push(`
//       <div class="carousel-item">
//           <img src="${service.imgUrl}" alt="${service.name}" />
//           <h3 class="title-level-3">${service.name}</h3>
//           <p class="after-title-3-text">
//             ${service.description}
//           </p>
//           <a href="${link}">Learn more</a>
//         </div>
//         `);
//     }
//     return servicesHTML;
//   }
//   showServices();
//   const slidesServices = [...servicesHTML];
//   let currentSlide = 0;
//   function showCurrentSlide() {
//     const slideContainer = document.querySelector(".carousel-honey-icons");
//     slideContainer.innerHTML =
//       slidesServices[currentSlideIdx] +
//       slidesServices[currentSlideIdx + 1] +
//       slidesServices[currentSlideIdx + 2];
//   }

//   function nextSlide() {
//     if (currentSlideIdx >= slidesServices.length) currentSlideIdx = 0;
//     showCurrentSlide();
//     currentSlide++;
//   }

//   document.querySelector(".carousel-honey-icons"),
//     addEventListener("click", nextSlide);
//   setInterval(nextSlide, 3000);
//   showCurrentSlide();
// })();

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
    showCurrentSlide;
  }

  setInterval(nextSlide, 3000);
  showCurrentSlide;
})();

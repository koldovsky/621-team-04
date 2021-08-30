(function() {

    const productsJson = `[
        {
            "id": "1",
            "name": "Jassica Peterson",
            "text": "This is great honey, 100% natural! It is not the first time I order honey from this company, and every time I know that I will get delicious, high- quality, not crystallized honey. I use honey as a topping for pancakes, various desserts, and marinades. It is delicious and my children also like this honey!",
            "date": "October 28, 2020",
            "imgUrl": "img/photo-woman.png"
        },
        {
            "id": "2",
            "name": "Dean Nillstrom",
            "text": "Nowadays it is not so easy to find really good, tasty, and natural honey. I first tried the HoneyBee honey several years ago, and since then I have been a regular customer of this producer. I know for sure that these guys work with feeling and sell real honey from their swaths. I am always happy with the product I receive.",
            "date": "February 12, 2021",
            "imgUrl": "img/photo-man.png"
        },
        {
            "id": "3",
            "name": "Diana Fergusson",
            "text": "Having tasted this honey once, I no longer needed alternatives. This is the tastiest honey I've ever tried! I buy different types of honey, from clover to buckwheat. Each jar of honey is a real triumph of taste. This is real honey -thick, aromatic, dark, and moderately sweet. Exactly what I need!",
            "date": "April 18, 2021",
            "imgUrl": "img/photo-woman-diana.png"
        }
    ]`;

    const products = JSON.parse(productsJson);

    let productsHtml = [];
    for (const product of products) {
        productsHtml.push(` 
        <div class="card">
          <img src="${product.imgUrl}" width="70" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>
          ${product.text}
          </p>
          <p>${product.date}</p>
          </div>`); 
    };

    document.querySelector('.carusel-products').innerHTML = productsHtml;
    
    
        const slides = productsHtml;
        let currentSlideIdx = 0;

        function showCurrentSlide() {
            const slideContainer = document.querySelector('.carusel-products .card');
            slideContainer.innerHTML = slides[currentSlideIdx];
        }
    
        function nextSlide() {
            currentSlideIdx++;
            if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
            showCurrentSlide();
        }
    
        setInterval(nextSlide, 6000);
        showCurrentSlide();

        
})();

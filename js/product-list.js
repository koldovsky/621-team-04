(function () {
    const productsJSON = ` [
    {
        "id": "1",
        "name": "Wildflower Honey",
        "price": "$7,00USD",
        "imgUrl": "img/wildflower-honey.jpg"
    },
    {
        "id": "2",
        "name": "Blossom Honey",
        "price": "$20,00USD",
        "imgUrl": "img/blossom-honey.jpg"
    },
    {
        "id": "3",
        "name": "Clover Honey",
        "price": "$8,00USD",
        "imgUrl": "img/clover-honey.jpg"
    },
    {
        "id": "4",
        "name": "Buckwheat Honey",
        "price": "$10,00USD",
        "imgUrl": "img/buchwheat-honey.jpg"
    },
    {
        "id": "5",
        "name": "Citrus Blossom Honey",
        "price": "$7,00USD",
        "imgUrl": "img/citrus-blossom-honey.jpg"
    }
]` ;
    const products = JSON.parse(productsJSON);
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
     <div class="wildflower-honey-article">
        <img src="${product.imgUrl}" width="335" alt="${product.name}"
        />
        <h4 class="title-honey-articles">${product.name}</h4>
        <p class="price-for-honey">${product.price}</p>
        <a href="#buy-now" class="buy-now-button">${product.price} - Buy Now</a>
      </div>`
    }
    document.querySelector('section .honey-articles').innerHTML = productsHtml;
})();
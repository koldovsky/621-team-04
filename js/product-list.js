(function () {
  let rates;
  let order = "original";
  function showProducts() {
    const currency = document.querySelector(".currency").value;
    const productsJSON = ` [
    {
        "id": "1",
        "name": "Wildflower Honey",
        "price": 7,00,
        "imgUrl": "img/wildflower-honey.jpg"
    },
    {
        "id": "2",
        "name": "Blossom Honey",
        "price": 20,00,
        "imgUrl": "img/blossom-honey.jpg"
    },
    {
        "id": "3",
        "name": "Clover Honey",
        "price": 8,00,
        "imgUrl": "img/clover-honey.jpg"
    },
    {
        "id": "4",
        "name": "Buckwheat Honey",
        "price": 10,00,
        "imgUrl": "img/buckwheat-honey.jpg"
    },
    {
        "id": "5",
        "name": "Citrus Blossom Honey",
        "price": 7,00,
        "imgUrl": "img/citrus-blossom-honey.jpg"
    }
]`;
    const products = JSON.parse(productsJSON);
    let productsHtml = "";
    for (const product of products) {
      productsHtml += `
     <div class="wildflower-honey-article">
        <img src="${product.imgUrl}" width="250" alt="${product.name}"
        />
        <h4 class="title-honey-articles">${product.name}</h4>
        <p class="price-for-honey">${convertCurrency(
          product.price,
          currency
        )}</p>
        <a href="#buy-now" class="buy-now-button">Buy Now</a>
      </div>`;
    }
    document.querySelector("section .honey-articles").innerHTML = productsHtml;

    async function getCurrencyRates() {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      rates = response.json();
      document.querySelector(".currency").disabled = false;
    }
    getCurrencyRates();
    function convertCurrency(priceUSD, convertTo) {
      if (convertTo === "USD") return priceUSD;
      return (priceUSD * rates.rates[convertTo]).toFixed(2);
    }
  }
  document
    .querySelector(".currency")
    .addEventListener("change", () => showProducts(products));
})();

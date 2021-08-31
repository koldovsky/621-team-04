/*const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});

*/ 

function randomSum(min, max) {
  document.querySelector('.sum').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min)
}
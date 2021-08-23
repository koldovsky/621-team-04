const accordeonHeaders = document.querySelectorAll(".accordeon-header");
accordeonHeaders.forEach((accordeonHeader) => {
  accordeonHeader.addEventListener("click", (event) => {
    accordeonHeader.classList.toggle("active");
  });
});

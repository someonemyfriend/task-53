// import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const products = document.querySelector('.product');
  products.forEach(product => {
      const priceSpan = product.querySelector('.price');
      const price = priceSpan.textContent;
      product.setAttribute('data-price', price);
  }) 

  

});


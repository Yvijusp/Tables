// Variables
const productTableOutputElement = document.querySelector("#product-tables");

fetch("http://localhost:5000/api/portfolio")
  .then((res) => res.json())
  .then((data) => {
    data.reduce((total, item) => {
      productTableOutputElement.innerHTML += `
      <div class="table">
      <div class="table__img">
        <img class="tableImage" src="${item.img}">
      </div>
      <div class="table__content">
        <p class="titleBig">${item.name.split(" ").slice(0, 2).join(" ")}</p>
        <p class="titleA">Matmenys</p><p class="titleOfProduct">${
          item.dimensions
        }</p>
        <p class="titleA">Spalva</p><p class="titleOfProduct">${item.color}</p>
        </div>
      </div>
    `;
    }, "");
  });

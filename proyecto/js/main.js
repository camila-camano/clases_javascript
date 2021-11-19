// -------------------------------------Sistema

// Productos del catálogo

let products = [
  { id: 1, flower_name: "margarita", price: 50, stock: 12 },
  { id: 2, flower_name: "rosa", price: 150, stock: 23 },
  { id: 3, flower_name: "petunia", price: 100, stock: 20 },
];

// Carrito inicial
let shopping_cart = [];
let final_price = 0;

//desafio json
console.log(products);

localStorage.setItem("productos2", JSON.stringify(products));
const productsJson = localStorage.getItem("productos2");
console.log(productsJson);
console.log(typeof productsJson);

const productsOG = JSON.parse(productsJson);
console.log(productsOG);

// main

//test json
/*
URLJSON = `data/data.json`;

$("#eventos").prepend(`<button id="btn1"> JSON</button>`);

$(`#btn1`).click(() =>
  $.get(URLJSON, (respuesta, estado) => {
    if (estado === "success") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("#eventos").prepend(`<div>
                                    <h3>${dato.flower_name}</h3>
                                    </div>`);
      }
    }
  })
);
*/
mostrarCatálogo();

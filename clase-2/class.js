console.log("hola mundo");

class Product {
  constructor(flower, price, type, stock) {
    (this.flower = flower),
      (this.price = price),
      (this.type = type),
      (this.stock = stock);
  }

  //Agrega stock de una flor en particular.
  //updateStock(flower);

  //Cambia el estado de una flor de LIMITADO a BÁSICO o viceversa.
  //updateType(flower);

  // Actualiza el precio de una flor.
  //updatePrice(flower);
}

let products = [
  { flower: "margarita", price: 50, type: "basico", stock: 12 },
  { flower: "rosa", price: 150, type: "basico", stock: 23 },
  { flower: "petunia", price: 100, type: "basico", stock: 20 },
];

let shopping_cart = [];

// Simulador de menu de compras

function comprarProducto(opcion) {
  let producto;
  switch (opcion.toLowerCase()) {
    case "margarita":
      alert("Elegiste margarita.");
      producto = products.find((e) => e.flower === opcion);
      console.log(producto);
      shopping_cart.push(producto);
      break;
    case "rosa":
      alert("Elegiste rosa.");
      producto = products.find((e) => e.flower === opcion);
      console.log(producto);
      shopping_cart.push(producto);
      break;
    case "petunia":
      alert("Elegiste petunia.");
      producto = products.find((e) => e.flower === opcion);
      console.log(producto);
      shopping_cart.push(producto);
      break;
  }
}

function devolverTotalCompra() {
  let compraTotal = 0;

  shopping_cart.forEach((elem) => {
    compraTotal += elem.price;
  });

  console.log("Total compra", compraTotal);
  return compraTotal;
}

let name_flower = prompt(`¿Qué flor desea comprar? Escriba ESC para terminar.:
1. Margarita.
2. Rosa.
3. Petunia.`);

while (name_flower !== "ESC") {
  comprarProducto(name_flower);
  name_flower = prompt(`¿Qué flor desea comprar? Escriba ESC para terminar.:
1. Margarita.
2. Rosa.
3. Petunia.`);
}

alert("El total de su compra es " + devolverTotalCompra());

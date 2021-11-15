console.log("hola mundo");

//--------------------------- Inicialización de variables y clases.

// Clase para los productos, que tiene el nombre de la flor, su precio y el stock.
class Product {
  constructor(flower, price, stock) {
    (this.flower = flower), (this.price = price), (this.stock = stock);
  }
}

// Clase para las compras, con el nombre de la flor, el precio y la cantidad deseada.
class Compra {
  constructor(flower, price, amount) {
    (this.flower = flower), (this.price = price), (this.amount = amount);
  }
}

// Productos iniciales
let products = [
  { flower: "margarita", price: 50, stock: 12 },
  { flower: "rosa", price: 150, stock: 23 },
  { flower: "petunia", price: 100, stock: 20 },
];

// Carrito inicial
let shopping_cart = [];
let final_price = 0;

//-----------------------------Imprimir catálogo

function mostrarCatálogo(array) {
  for (const producto of array) {
    let contenedor = document.createElement("carta");
    contenedor.innerHTML = `
          <div class="card">
              <div class="card-body2">
                  <h3 class="card-title"> Nombre: ${producto.flower}</h3>
                  <p class="card-text"> Cantidad en stock: ${producto.stock}</p>
                  <p class="card-text"> Precio unidad: $${producto.price}</p>
              </div>
          </div>
          `;
    document.getElementById("catalogo").appendChild(contenedor);
  }
}

mostrarCatálogo(products);
//----------------------------- Simulador de menu de compras

// Agrega una cantidad de una flor en particular al carrito.
//   Si lo que el usuario quiere no está entre los productos, sale.
//   Si pide más de las que hay disponibles, no agrega nada y el usuario deberá intentar de nuevo.
//   Actualiza los valores del stock si se realiza una compra.

function addToCart(name, amount) {
  let producto;
  amount = parseInt(amount);
  producto = products.find((e) => e.flower === name.toLowerCase());

  // Chequeo si el name existe.
  if (producto == undefined) {
    alert("El producto que usted desea no existe");
    return;
  }

  //Chequea si hay stock.
  if (producto.stock >= amount) {
    //chequea si ya está en el carrito
    check = shopping_cart.find((e) => e.flower === name.toLowerCase());

    if (check == undefined) {
      //no está en el carrito, lo creo
      let comprado = new Compra(name, producto.price, amount);
      shopping_cart.push(comprado);
      producto.stock -= amount;
      final_price += comprado.amount * comprado.price;
      alert(`Usted ha comprado ${amount} ${name}s`);
    } else {
      //está en el carrito, le sumo la cantidad nueva y lo sumo al precio final
      check.amount += amount;
      final_price += amount * check.price;
    }
  } else {
    //no hay stock del producto
    alert(
      `Usted pidió ${amount} ${name}s y actualmente hay ${producto.stock}. Intente de nuevo.`
    );
  }
}

let flower_name = prompt(`¿Qué flor desea comprar? O escriba ESC para terminar.:
1. Margarita.
2. Rosa.
3. Petunia.`);

let flower_amount = prompt(
  `¿Cuántas  ${flower_name.toLowerCase()}s quiere comprar?`
);

while (flower_name !== "ESC") {
  addToCart(flower_name, flower_amount);
  flower_name = prompt(`¿Qué flor desea comprar? Escriba ESC para terminar.:
1. Margarita.
2. Rosa.
3. Petunia.`);
  if (flower_name !== "ESC") {
    flower_amount = parseInt(
      prompt(`¿Cuántas ${flower_name.toLowerCase()}s quiere comprar? `)
    );
  }
}
alert("El total de su compra es " + final_price);

function mostrarProductosEnHTML(array) {
  for (const producto of array) {
    let contenedor = document.createElement("carta");
    contenedor.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h3 class="card-title"> Nombre: ${producto.flower}</h3>
                  <p class="card-text"> Cantidad: ${producto.amount}</p>
                  <p class="card-text"> Precio unidad: $${producto.price}</p>
                  <p class="card-text"> Precio total: $${
                    producto.price * producto.amount
                  }</p>
            
              </div>
          </div>
          `;
    document.getElementById("container").appendChild(contenedor);
  }
}

function showFinalPrice() {
  let fin = document.querySelector("#fin");
  fin.innerHTML = `
  <h4 class = "card-title"> Su precio final total es: $${final_price}</h4>
  `;
}

mostrarProductosEnHTML(shopping_cart);
showFinalPrice();

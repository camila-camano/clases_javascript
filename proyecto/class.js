console.log("hola mundo");

//--------------------------- Inicialización de variables y clases.

// Clase para los productos, que tiene el nombre de la flor, su precio y el stock.
class Product {
  constructor(id, flower, price, stock) {
    (this.id = id),
      (this.flower = flower),
      (this.price = price),
      (this.stock = stock);
  }
}

// Clase para las compras, con el nombre de la flor, el precio y la cantidad deseada.
class Compra {
  constructor(id, flower, price, amount) {
    (this.id = id),
      (this.flower = flower),
      (this.price = price),
      (this.amount = amount);
  }
}

// Productos iniciales
let products = [
  { id: 1, flower: "margarita", price: 50, stock: 12 },
  { id: 2, flower: "rosa", price: 150, stock: 23 },
  { id: 3, flower: "petunia", price: 100, stock: 20 },
];

// Carrito inicial
let shopping_cart = [];
let final_price = 0;

function addStock(flower, amount) {
  //encuentro la flor
  let producto = products.find((e) => e.flower === flower.toLowerCase());
  if (producto != undefined) {
    producto.stock += amount;
  }
}

//----------------------------- Simulador de menu de compras

// Agrega una cantidad de una flor en particular al carrito.
//   Si lo que el usuario quiere no está entre los productos, sale.
//   Si pide más de las que hay disponibles, no agrega nada y el usuario deberá intentar de nuevo.
//   Actualiza los valores del stock si se realiza una compra.

function addToCart(name, amount) {
  let producto;
  amount = parseInt(amount);
  producto = products.find((e) => e.flower === name.toLowerCase());

  //Chequea si hay stock.
  if (producto.stock >= amount) {
    //chequea si ya está en el carrito
    check = shopping_cart.find((e) => e.flower === name.toLowerCase());

    if (check == undefined) {
      //no está en el carrito, lo creo
      let comprado = new Compra(producto.id, name, producto.price, amount);
      console.log(shopping_cart);
      shopping_cart.push(comprado);
      producto.stock -= amount;
      final_price += comprado.amount * comprado.price;
    } else {
      //está en el carrito, le sumo la cantidad nueva y lo sumo al precio final
      check.amount += amount;
      final_price += amount * check.price;
    }

    //mensaje de compra finalizada.
    $("#historial")
      .append(`<div> <h3> Usted ha comprado: ${amount} ${name}s. <h3>
    </div>`);
  } else {
    //no hay stock del producto
    alert(
      `Usted pidió ${amount} ${name}s y actualmente hay ${producto.stock}. Intente de nuevo.`
    );
  }
}

function mostrarProductosEnHTML(array) {
  for (const producto of array) {
    let contenedor = document.createElement("carta");
    contenedor.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <p class="card-title"> Usted ha agregado: ${producto.flower} al carrito</p>
                  <p class="card-text"> Cantidad: ${producto.amount}</p>
                  <p class="card-text"> Precio por unidad: $${producto.price}</p>
                  
            
              </div>
          </div>
          `;
    document.getElementById("container").appendChild(contenedor);
  }
}

function emptyShoppingCart() {
  //seteo el total a pagar en 0
  final_price = 0;
  //renuevo el stock
  for (const producto of shopping_cart) {
    addStock(producto.flower, producto.amount);
  }

  shopping_cart.splice(0, shopping_cart.length);
  $("#historial").append(`<div>
  <h3> Usted ha borrado todo su carrito. Su precio final actual: $${final_price}.</h3>
  </div>`);
}

function showFinalPrice() {
  let fin = document.querySelector("#fin");
  fin.innerHTML = `
  <h4 class = "card-title"> Su precio final total es: $${final_price}</h4>
  `;

  //boton para borrar carrito
  let delete_button = document.createElement("button");
  delete_button.innerText = "Borrar carrito";
  delete_button.addEventListener("click", (event) => {
    emptyShoppingCart();
  });

  let botonNode = document.createElement("div");
  botonNode.appendChild(delete_button);
  fin.appendChild(botonNode);
}

//-----------------------------Imprimir catálogo y sistema de compras.

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

    // Agrego botón

    let boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.id = producto.id;

    boton.addEventListener("click", (event) => {
      let flower_amount = prompt(`¿Cuántas quiere comprar?`);

      addToCart(producto.flower, flower_amount);

      showFinalPrice();
    });

    let nodo = document.createElement("div");
    nodo.innerHTML = contenedor;
    contenedor.appendChild(boton);

    document.getElementById("catalogo").appendChild(contenedor);
  }
}

mostrarCatálogo(products);

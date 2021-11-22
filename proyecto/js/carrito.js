// -------------------------------------Funciones del carrito

// Agrega una cantidad de una flor en particular al carrito.

function addToCart(name, amount) {
  console.log(amount);
  amount = parseInt(amount);
  let producto = products.find((e) => e.flower_name == name.toLowerCase());
  let check = JSON.parse(localStorage.getItem(`${producto.id}`));

  if (check == undefined) {
    //no está en el carrito, lo creo y agrego al carrito

    let comprado = new Compra(producto.id, name, producto.price, amount);
    localStorage.setItem(`${comprado.id}`, JSON.stringify(comprado));
  } else {
    //está en el carrito, le sumo la cantidad nueva y lo sumo al precio final
    check.amount += amount;
  }
}

// Elimina todos los productos del carrito.
function emptyShoppingCart() {
  //seteo el total a pagar en 0

  localStorage.clear();
  //renuevo el stock

  $("#historial").empty();
  $("#historial").append(`<div>
    <h3> Usted ha borrado su carrito anterior.</h3>
    </div>`);
  $("#fin").empty();
  $("#carrito").empty();
}

// Imprime todo el carrito
function mostrarCarrito() {
  for (let index = 0; index < localStorage.length; index++) {
    let producto = JSON.parse(localStorage.getItem(localStorage.key(index)));
    mostrarEnCarrito(producto);
  }
}

//Imprime el producto en el carrito.
function mostrarEnCarrito(producto) {
  let carta_carrito = document.createElement("div");
  carta_carrito.innerHTML = `
  <div id="${producto.id}" class="card-body">
  <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
  <p class="card-text" > Cantidad: ${producto.amount}</p>
 <input type="button" class="boton_quitar" value="Quitar">
  `;
  $("#carrito").append(carta_carrito);
}

// -------------------------------------Funciones del carrito

// Agrega una cantidad de una flor en particular al carrito.

function addToCart(name, amount) {
  $.get(URL_flores, function (res, state) {
    if (state === "success") {
      console.log(res);
      let products = res;

      console.log(name);
      amount = parseInt(amount);
      let producto = products.find((e) => e.flower_name == name.toLowerCase());
      let check = JSON.parse(localStorage.getItem(`${producto.id}`));

      if (check == undefined) {
        //no está en el carrito, lo creo

        let comprado = new Compra(producto.id, name, producto.price, amount);
        localStorage.setItem(`${comprado.id}`, JSON.stringify(comprado));
      } else {
        //está en el carrito, lo reescribo
        let comprado = new Compra(
          producto.id,
          name,
          producto.price,
          amount + check.amount
        );
        localStorage.setItem(`${comprado.id}`, JSON.stringify(comprado));
      }
    }
  });
}

// Elimina todos los productos del carrito.
function emptyShoppingCart() {
  localStorage.clear();

  $("#historial").empty();
  $("#historial").append(`<div>
    <h3> Usted ha borrado su carrito anterior.</h3>
    </div>`);
  $("#fin").empty();
  $("#carrito").empty();
}

function botonCarrito() {
  let boton_carrito = document.createElement("div");
  boton_carrito.innerHTML = `
 <input type="button" id="boton_carrito" value="Mostrar carrito y precio.">
  `;
  $("#boton_carrito").append(boton_carrito);
  $("#boton_carrito").click(function (e) {
    mostrarCarrito();
    showFinalPrice();
  });
}

// Imprime todo el carrito
function mostrarCarrito() {
  $("#carrito").empty();
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
 <input type="button" id="boton_quitar" value="Quitar">
  `;
  $("#carrito").append(carta_carrito);

  $(document).ready(function () {
    $("#boton_quitar").click((e) => {
      console.log(`quiero sacar el ${producto.id}`);
    });
  });
}

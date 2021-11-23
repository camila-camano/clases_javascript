// -------------------------------------Funciones del carrito

// Agrega una cantidad de una flor en particular al carrito.
function agregarAlArreglo(name, amount) {
  $.get(URL_flores, function (res, state) {
    if (state === "success") {
      //console.log(res);
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
      //}
      //});
    }
  });
  $("#mensaje_borrado").remove();
}

// Elimina todos los productos del carrito.
function vaciarArreglo() {
  localStorage.clear();

  $("#historial").empty();
  $("#historial").append(`<div>
    <h3 id="mensaje_borrado" style="height: 120px"> Usted ha borrado todo su arreglo anterior.</h3>
    </div>`);
  $("#fin").empty();
  $("#carrito").empty();
}

// Agrega botón para mostrar el carrito.
function botonCarrito() {
  let boton_carrito = document.createElement("div");
  boton_carrito.innerHTML = `
 <input type="button" id="boton_carrito" class="btn btn-danger" value="Actualizar arreglo y precio.">
  `;
  $("#boton_carrito").append(boton_carrito);
  $("#boton_carrito").click(function (e) {
    mostrarCarrito();
    mostrarPrecioFinal();
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

//Imprime un producto en el carrito.
function mostrarEnCarrito(producto) {
  let carta_carrito = document.createElement("div");
  carta_carrito.innerHTML = `
  <div id="carta-${producto.id}" class="card-body">

  <input type="hidden" value="${producto.id}" >
  <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
  <p class="card-text" > Cantidad: ${producto.amount}</p>
  <button id="boton_quitar" class="btn btn-danger">Quitar</button>
  `;
  $("#carrito").append(carta_carrito);

  //Quita todo el producto del carrito
  $("body").on("click", "#boton_quitar", function (e) {
    let hijos = $(e.target).parent().children();
    let flor_id = hijos[0].value;

    $(`#carta-${flor_id}`).remove();
    localStorage.removeItem(flor_id);
  });
}

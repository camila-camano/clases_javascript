// -------------------------------------Funciones del carrito

// Agrega una cantidad de una flor en particular al carrito.
function addToCart(name, amount) {
  let producto;
  amount = parseInt(amount);
  producto = products.find((e) => e.flower_name === name.toLowerCase());
  console.log(producto.flower_name);

  //Chequea si hay stock.
  if (producto.stock >= amount) {
    //chequea si ya está en el carrito
    check = shopping_cart.find((e) => e.flower_name === name.toLowerCase());

    if (check == undefined) {
      //no está en el carrito, lo creo y agrego al carrito
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

    // cambios en el html
    mostrarEnCarrito(producto, amount);
    $("#historial")
      .append(`<div> <h3> Usted ha agregado ${amount} ${name}s al carrito. <h3>
      </div>`);
  } else {
    //no hay stock del producto
    alert(
      `Usted pidió ${amount} ${name}s y actualmente hay ${producto.stock}. Intente de nuevo.`
    );
  }
}

// Elimina todos los productos del carrito.
function emptyShoppingCart() {
  //seteo el total a pagar en 0
  final_price = 0;
  //renuevo el stock
  for (const producto of shopping_cart) {
    addStock(producto.flower_name, producto.amount);
  }

  shopping_cart.splice(0, shopping_cart.length);

  $("#historial").empty();
  $("#historial").append(`<div>
    <h3> Usted ha borrado su carrito anterior.</h3>
    </div>`);
  $("#fin").empty();
  $("#carrito").empty();
}

//Imprime el producto en el carrito.
function mostrarEnCarrito(producto, amount) {
  let carta_carrito = document.createElement("div");
  carta_carrito.innerHTML = `
  <div id="${producto.id}" class="card-body">
  <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
  <p class="card-text" > Cantidad: ${amount}</p>
 <input type="button" class="boton_quitar" value="Quitar">
  `;
  $("#carrito").append(carta_carrito);
}

// -------------------------------------Funciones del sistema

// Agrega al catálogo
function addStock(flower_name, amount) {
  //encuentro la flor
  let producto = products.find(
    (e) => e.flower_name === flower_name.toLowerCase()
  );
  if (producto != undefined) {
    producto.stock += amount;
  }
}

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

    mostrarEnCarrito(producto, amount);
    //mensaje de compra finalizada.
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

// Muestra precio a pagar.
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

//Imprime catálogo y sistema de compras.
function mostrarCatálogo() {
  products.forEach((producto) => {
    let contenedor = document.createElement("carta");
    contenedor.innerHTML = `
            <div class="card">
                <div class="card-body2">
                    <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
                    <p class="card-text" id="${producto.id}"> Cantidad en stock: ${producto.stock}</p>
                    <p class="card-text"> Precio unidad: $${producto.price}</p>
                    
                      <input type="hidden" value="${producto.flower_name}" >
                      <input type="number" id="compra">
                      <input type="button" class="boton_compra" value="Agregar"> 
                    
                </div>
            </div>
            `;
    document.getElementById("catalogo").appendChild(contenedor);
  });

  //evento al comprar
  $(document).ready(function () {
    $(".boton_compra").click(function (e) {
      let hijos = $(e.target).parent().children();

      let cantidad = hijos[4].value;
      let flor = hijos[3].value;
      addToCart(flor, cantidad);
      showFinalPrice();
    });
  });
}

//Imprime en el carrito el producto
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

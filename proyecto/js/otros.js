// ------------------------ Otras funciones del sistema

// Muestra precio a pagar.

function calcularPrecioFinal() {
  let precio_final = 0;

  for (let index = 0; index < localStorage.length; index++) {
    let producto = JSON.parse(localStorage.getItem(localStorage.key(index)));
    console.log(producto);
    precio_final += producto.price * producto.amount;
  }
  return precio_final;
}

function showFinalPrice() {
  let fin = document.querySelector("#fin");
  let precio = calcularPrecioFinal();
  fin.innerHTML = `
      <h4 class = "card-title"> Su precio final total es: $${precio}</h4>
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

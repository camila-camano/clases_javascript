// ------------------------ Otras funciones del sistema

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

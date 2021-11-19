// ------------------- Funciones del catálogo

// Agrega stock al catálogo
function addStock(flower_name, amount) {
  //encuentro la flor
  let producto = products.find(
    (e) => e.flower_name === flower_name.toLowerCase()
  );
  if (producto != undefined) {
    producto.stock += amount;
  }
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

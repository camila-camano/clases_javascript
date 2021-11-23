// ------------------- Funciones del catálogo

const URL_flores = "./js/data/data.json";

let products = [
  { flower: "margarita", price: 50, stock: 12 },
  { flower: "rosa", price: 150, stock: 23 },
  { flower: "petunia", price: 100, stock: 20 },
];

function mostrarCatálogo() {
  $("body").prepend(`<button id="botonCatalogo"> Mostrar catalogo</button>`);

  $("#botonCatalogo").click(() => {
    $.get(URL_flores, function (res, state) {
      if (state === "success") {
        console.log(res);
        res.forEach((producto) => {
          console.log(producto);
          let contenedor = document.createElement("carta");
          contenedor.innerHTML = `
                  <div class="card">
                      <div class="card-body2">
                          <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
                          <p class="card-text"> Precio unidad: $${producto.price}</p>
                            <input type="hidden" value="${producto.flower_name}" >
                            <input type="number" id="compra">
                            <button  id="boton_compra">Agregar</button>
                      </div>
                  </div>
                  `;
          document.getElementById("catalogo").appendChild(contenedor);
        });
      }
    });
  });

  /*
  $("#boton_compra").click(function (e) {
    let hijos = $(e.target).parent().children();

    let cantidad = hijos[3].value;
    console.log(cantidad);
    let flor = hijos[2].value;
    console.log(flor);
    addToCart(flor, cantidad);
    //showFinalPrice();
  });
  */
}

$("body").on("click", "#boton_compra", function (e) {
  let hijos = $(e.target).parent().children();

  let cantidad = hijos[3].value;
  console.log(cantidad);
  let flor = hijos[2].value;
  console.log(flor);
  addToCart(flor, cantidad);
  //showFinalPrice();
});

/*
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
*/

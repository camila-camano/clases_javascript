// ------------------- Funciones del catálogo

//------------------se va esto
//Imprime catálogo y sistema de compras.

/*
  products.forEach((producto) => {
    let contenedor = document.createElement("carta");
    contenedor.innerHTML = `
              <div class="card">
                  <div class="card-body2">
                      <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
                      
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

      let cantidad = hijos[3].value;
      let flor = hijos[2].value;
      addToCart(flor, cantidad);
      showFinalPrice();
    });
  });
}
*/

const URL_flores = "./js/data/data.json";

/*
function mostrarCatálogo() {
  $("body").prepend(
    `<button id="botonCatalogo" class="btn btn-sucess m-2"> Mostrar catalogo</button>`
  );

  $("#botonCatalogo").click(() => {
    $.get(URL_flores, function (res, state) {
      if (state === "success") {

        console.log(res);
        res.forEach((producto) => {
          let contenedor = document.createElement("carta");
          contenedor.innerHTML = `
                  <div class="card">
                      <div class="card-body2">
                          <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
                          <p class="card-text"> Precio unidad: $${producto.price}</p>
                            <input type="hidden" value="${producto.flower_name}" >
                            <input type="number" id="compra">
                            <input type="button" id="boton_compra" value="Agregar"> 
                      </div>
                  </div>
                  `;
          document.getElementById("catalogo").appendChild(contenedor);
        });

        //evento al comprar
        $(document).ready(function () {
          $("#boton_compra").click(function (e) {
            console.log(e);
            let hijos = $(e.target).parent().children();

            let cantidad = hijos[3].value;
            let flor = hijos[2].value;
            addToCart(flor, cantidad);
            showFinalPrice();
          });
        });

      }
    
    }
  }
}

*/
function mostrarCatálogo() {
  $("body").prepend(
    `<button id="botonCatalogo" class="btn btn-sucess m-2"> Mostrar catalogo</button>`
  );

  $("#botonCatalogo").click(() => {
    $.get(URL_flores, function (res, state) {
      if (state === "success") {
        console.log(res);
        res.forEach((producto) => {
          let contenedor = document.createElement("carta");
          contenedor.innerHTML = `
                  <div class="card">
                      <div class="card-body2">
                          <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
                          <p class="card-text"> Precio unidad: $${producto.price}</p>
                            <input type="hidden" value="${producto.flower_name}" >
                            <input type="number" id="compra">
                            <input type="button" id="boton_compra" value="Agregar"> 
                      </div>
                  </div>
                  `;
          document.getElementById("catalogo").appendChild(contenedor);
        });

        $("#boton_compra").click(function (e) {
          let hijos = $(e.target).parent().children();

          let cantidad = hijos[3].value;
          console.log(cantidad);
          let flor = hijos[2].value;
          console.log(flor);
          //addToCart(flor, cantidad);
          //showFinalPrice();
        });
      }
    });
  });
}

// ------------------- Funciones del catálogo

const URL_flores = "./js/data/data.json";

// Muestra el catálogo de flores.
function mostrarCatálogo() {
  $("#catalogo").prepend(
    `<button id="boton_catalogo" class="btn btn-danger"> Mostrar flores disponibles</button>`
  );

  $("body").on("click", "#boton_catalogo", function () {
    $.get(URL_flores, function (res, state) {
      if (state === "success") {
        console.log(res);
        res.forEach((producto) => {
          console.log(producto);
          let contenedor = document.createElement("carta");
          contenedor.innerHTML = `
                  <div class="card" id="carta">
                      <div class="card-body2" >
                          <h3 class="card-title"> Nombre: ${producto.flower_name}</h3>
                          <p class="card-text"> Precio unidad: $${producto.price}</p>
                            <input type="hidden" value="${producto.flower_name}" >
                            <input type="number" id="compra">
                            <button  id="boton_compra" class="btn btn-danger">Agregar al arreglo</button>
                      </div>
                  </div>
                  `;
          document.getElementById("catalogo").appendChild(contenedor);
        });
      }
    });

    $("#boton_catalogo").hide();
  });
}

$("body").on("click", "#boton_compra", function (e) {
  $("#carta").fadeIn("slow");
  let hijos = $(e.target).parent().children();

  let cantidad = hijos[3].value;
  console.log(cantidad);
  let flor = hijos[2].value;
  console.log(flor);
  agregarAlArreglo(flor, cantidad);
});

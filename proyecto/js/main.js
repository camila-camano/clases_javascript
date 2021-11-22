// -------------------------------------Sistema

// Productos del catálogo

let products = [
  { id: 1, flower_name: "margarita", price: 50 },
  { id: 2, flower_name: "rosa", price: 150 },
  { id: 3, flower_name: "petunia", price: 100 },
];

// Carrito inicial
// carrito en local storage
//localStorage.setItem(`final_price`, 0);

// main

mostrarCatálogo();
mostrarCarrito();

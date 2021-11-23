// -------------------------------------Clases utilizadas

// Clase para los productos, que tiene el id, nombre y precio de la flor.
class Product {
  constructor(id, flower_name, price) {
    (this.id = id), (this.flower_name = flower_name), (this.price = price);
  }
}

// Clase para las compras, con el nombre de la flor, el precio y la cantidad deseada.
class Compra {
  constructor(id, flower_name, price, amount) {
    (this.id = id),
      (this.flower_name = flower_name),
      (this.price = price),
      (this.amount = amount);
  }
}

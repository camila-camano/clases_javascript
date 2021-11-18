// -------------------------------------Clases utilizadas

// Clase para los productos, que tiene el nombre de la flor, su precio y el stock.
class Product {
  constructor(id, flower_name, price, stock) {
    (this.id = id),
      (this.flower_name = flower_name),
      (this.price = price),
      (this.stock = stock);
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

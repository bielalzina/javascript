class Rectangle {
  constructor(alt, ample) {
    this.alçada = alt;
    this.amplada = ample;
  }
  area() {
    return this.alçada * this.amplada;
  }
  perimetre() {
    return (this.alçada + this.amplada) * 2;
  }

  static comparaArea(primer, segon) {
    return primer.area() - segon.area();
  }

  static width = 3;

  get dimensions() {
    return this.alçada + "x" + this.amplada;
  }

  set dimensions(dimensions) {
    let valors = dimensions.split("x");
    this.alçada = parseInt(valors[0]);
    this.amplada = parseInt(valors[1]);
  }
}

let elMeuRectangle = new Rectangle(10, 20);
console.log(elMeuRectangle.area());
console.log(elMeuRectangle.perimetre());

console.log();

let primerRect = new Rectangle(10, 20);
let segonRect = new Rectangle(10, 21);
console.log(primerRect.area());
console.log(segonRect.area());
console.log(Rectangle.comparaArea(primerRect, segonRect));

console.log();

//Rectangle staticWidth=3;
console.log(Rectangle.width);

let tercerRect = new Rectangle(3, 3);
console.log(tercerRect.width);

console.log();

let quartRect = new Rectangle(4, 4);
console.log(quartRect.dimensions);

class Square {
  constructor(shape) {
    this.side = shape.side;
  }

  area() {
    return this.side * this.side;
  }
}

module.exports = Square;
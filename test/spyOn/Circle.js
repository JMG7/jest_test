class Circle {
  constructor(shape) {
    this.radius = shape.radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = Circle;
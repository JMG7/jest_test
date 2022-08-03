const Square = require('./Square');
const Circle = require('./Circle');

function createShape(shape) {
  switch(shape.type) {
    case 'circle':
      return new Circle(shape);
    case 'square':
      return new Square(shape);
  }
}

function calculateArea(shape) {
  const shapeInstance = createShape(shape);
  return shapeInstance.area();
};

module.exports = {
  calculateArea
};
const { calculateArea } = require('./Shape');
const Square = require('./Square');
const Circle = require('./Circle');

afterEach(() => {
  jest.resetAllMocks();
});

// jest.mock('./Square');
/**
 * This only works if you need to check the constructor arguments and the times thats have been called
 * The execution of spied class methods will return undefined because it has no implementation
 * For testing this you must comment under this one 
 */
//  test('Square class should be created (with jest.mock())', () => {
//   const shapeData = { type: 'square', side: 5 } 
//   calculateArea(shapeData);
  
//   expect(Square).toHaveBeenCalledTimes(1);
//   expect(Square).toHaveBeenCalledWith(shapeData);
// });

test('Square class should be created (with jest.spyOn())', () => {
  const shapeData = { type: 'square', side: 5 } 
  const SquareSpy = jest.spyOn(Square.prototype, 'area');

  const result = calculateArea(shapeData);
  
  expect(SquareSpy).toHaveBeenCalledTimes(1);
  expect(result).toEqual(25);
});

test('Circle class should be created', () => {
  const shapeData = { type: 'circle', radius: 5 } 
  const CircleSpy = jest.spyOn(Circle.prototype, 'area');

  const result = calculateArea(shapeData);
  
  expect(CircleSpy).toHaveBeenCalled();
  expect(result).toEqual(78.53981633974483);
});


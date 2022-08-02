// MOCK MODULES
jest.mock('./maths', () => {
  const originalModule = jest.requireActual('./maths')
  return {
    ...originalModule,
    returnNumber: () => 0,
    // returnNumber: jest.fn(() => 0),
    // returnNumber: jest.fn().mockReturnValue(0),
  }
});

jest.mock('./maths.helper', () => {
  const originalModule = jest.requireActual('./maths.helper')
  return {
    ...originalModule,
    addDouble: () => 0,
  }
});


// IMPORTS
const subFunct = require('./maths.helper')
const funct = require('./maths')
const { sum, operationA, operationB, divide } = funct


afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});


// TESTS
describe('Functions of module `maths` should work as normal', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('divide 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
  });
})

describe('Using `maths` module and moking `maths.helper`', () => {
  test('a + b + `addDouble of a` .', () => {
    // In this case, `addDouble of a` is mocked an add 0 instead a*2.
    expect(operationA(1, 2)).toBe(3);
  });
})

// BUG No se ha conseguido mokear correctamente la función 'returnNumber' de functions
describe('Using `maths` module and moking internal `maths` functions', () => {
  test('a + b + returnNumber function.', () => {
    // In this case, returnNumber is mocked an add 0 instead a value.
    expect(operationB(1, 2)).toBe(3);
  });
})

describe('Spy block', () => {
  test('Using `maths` functions spying `maths.helper`', () => {
    const spy = jest.spyOn(subFunct, 'addDouble');
    expect(operationA(1, 2)).toBe(3);
    expect(operationA(2, 2)).toBe(4);
    expect(subFunct.addDouble.mock.calls[0][0]).toBe(1);
    expect(subFunct.addDouble.mock.calls[1][0]).toBe(2);
    expect(spy).toHaveBeenCalled();
  });
  
  // BUG No se ha conseguido espiar correctamente la función 'addDouble' cuando se usa una función 'operationA' de su mismo módulo
  test('Using `maths` functions spying internal `maths` functions', () => {
    const spy = jest.spyOn(funct, 'addDouble');
    expect(operationA(1, 2)).toBe(3);
    expect(operationA(2, 2)).toBe(4);
    expect(funct.addDouble.mock.calls[0][0]).toBe(1);
    expect(funct.addDouble.mock.calls[1][0]).toBe(2);
    expect(spy).toHaveBeenCalled();
  });
})


// IDEAS

// test('function using subfunctions imported and in the file', () => {
//   const spy = jest.spyOn(funct, 'returnNumber');
//   expect(reSumFun(1, 2)).toBe(4);
//   expect(reSumFun(2, 2)).toBe(5);
//   expect(funct.returnNumber.mock.calls[0][0]).toBe(1);
//   expect(funct.returnNumber.mock.calls[1][0]).toBe(2);
// });


// const callsDivide = () => {
//   try {
//     functions.divide(1, 2);
//     functions.divide(1, 0);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// test('divide', () => {
//   const spy = jest.spyOn(functions, 'divide');
//   callsDivide();
//   // console.log(spy.mock.results);
//   expect(spy).toHaveBeenCalledTimes(2);
// });
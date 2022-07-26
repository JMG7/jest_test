const subFunct = require('./subfunctions')
const funct = require('./functions')
const { sum, reSum, reSum2, divide } = funct

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

// MOCK SUBFUNCTIONS
jest.mock('./subfunctions', () => {
  const originalModule = jest.requireActual('./subfunctions')
  return {
    ...originalModule,
    addTwo: ()=> 0,
  }
});

// TESTS
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('a + b + addTwo function.', () => {
  // In this case, addTwo is mocked an add 0 instead 2.
  expect(reSum(1, 2)).toBe(3);
});

test('a + b + addThree function.', () => {
  // In this case, addTwo is mocked an add 0 instead 2.
  expect(reSum2(1, 2)).toBe(6);
});

test('divide 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('divide 4 / 2 to equal 2', () => {
  const spy = jest.spyOn(subFunct, 'addTwo');
  expect(reSum(1, 2)).toBe(3);
  expect(spy).toHaveBeenCalled();
});

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
// import * as functions from './functions';
// import {addTwo} from './subfunctions'
import { sum, reSum } from './functions'


// functions.sum = jest.fn(() => 2)
jest.mock('./subfunctions', () => {
  return {
    addTwo: ()=>{
      console.log('a');
      return 0;
    },
  }
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(reSum(1, 2)).toBe(3);
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
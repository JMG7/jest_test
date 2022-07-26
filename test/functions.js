import { addTwo } from "./subfunctions";

export const sum = (a, b) => {
  return a + b;
}

export const reSum = (a, b) => {
  return a + b + addTwo();
}

export const divide = (number1, number2) => {
  if (number2 === 0) throw new Error('Learn mathematics, stupid!')
  return number1 / number2;
}

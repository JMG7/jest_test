import { addThree, addTwo } from "./subfunctions";

function useless() {
  return 1;
}
module.exports.useless = useless

function addOne() {
  return 1;
}
module.exports.addOne = addOne

function sum(a, b) {
  return a + b;
}
module.exports.sum = sum

function reSum(a, b) {
  return a + b + addTwo();
}
module.exports.reSum = reSum

function reSumFun(a, b) {
  return a + b + addOne();
}
module.exports.reSumFun = reSumFun

function divide(number1, number2) {
  if (number2 === 0) throw new Error('Learn mathematics, stupid!')
  return number1 / number2
}
module.exports.divide = divide

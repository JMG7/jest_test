import { addDouble, addTriple } from "./maths.helper";

function returnOne() {
  return 1;
}
module.exports.useless = returnOne;

function returnNumber(num) {
  console.log('***MOKING FAILED****');
  return num;
}
module.exports.returnNumber = returnNumber;

function sum(a, b) {
  return a + b;
}
module.exports.sum = sum;

function operationA(a, b) {
  return a + b + addDouble(a);
}
module.exports.operationA = operationA;

function operationB(a, b) {
  return a + b + returnNumber(a);
}
module.exports.operationB = operationB;

function operationC(a, b) {
  return a + b + addTriple(a);
}
module.exports.reSumTree = operationC;

function divide(number1, number2) {
  if (number2 === 0) throw new Error('Divider is 0!');
  return number1 / number2;
}
module.exports.divide = divide;

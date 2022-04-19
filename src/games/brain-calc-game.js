import commonLogics from '../index.js';

import getRandomNumber from '../random-number.js';

const task = 'What is the result of the expression?';

const answer = (firstNum, operator, secondNum) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
  }
  return result;
};

const decision = () => {
  const mathSign = ['+', '-', '*'];
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const operator = mathSign[getRandomNumber(0, 2)];
  const condition = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = answer(firstNum, operator, secondNum).toString();
  return [condition, correctAnswer];
};
export default () => commonLogics(task, decision);

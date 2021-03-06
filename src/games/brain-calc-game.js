import commonLogics from '../index.js';

import getRandomNumber from '../random-number.js';

const task = 'What is the result of the expression?';

const getAnswer = (firstNum, operator, secondNum) => {
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

const getRoundData = () => {
  const mathSign = ['+', '-', '*'];
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const operator = mathSign[getRandomNumber(0, 2)];
  const condition = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = getAnswer(firstNum, operator, secondNum).toString();
  return [condition, correctAnswer];
};
export default () => commonLogics(task, getRoundData);

import commonLogics from '../index.js';

import getRandomNumber from '../random-number.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  const smolestNum = firstNum >= secondNum ? secondNum : firstNum;
  let largestDivider = 1;
  for (let i = 2; i <= smolestNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      largestDivider = i;
    }
  }
  return largestDivider;
};

const decision = () => {
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const condition = `${firstNum} ${secondNum}`;
  const correctAnswer = getGcd(firstNum, secondNum).toString();
  return [condition, correctAnswer];
};
export default () => commonLogics(task, decision);

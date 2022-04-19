import commonLogics from '../index.js';

import getRandomNumber from '../random-number.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const halfNum = Math.floor(num / 2);
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const decision = () => {
  const condition = getRandomNumber(1, 100);
  const correctAnswer = isPrime(condition) ? 'yes' : 'no';
  return [condition, correctAnswer];
};
export default () => commonLogics(task, decision);

import commonLogics from '../src/index.js';

import getRandomNumber from '../src/random-number.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (condition) => {
  const number = condition;
  const halfNumber = Math.floor(number / 2);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) {
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

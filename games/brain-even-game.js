import commonLogics from '../src/index.js';

import getRandomNumber from '../src/random-number.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const condition = () => {
  const number = getRandomNumber(1, 100);
  console.log(number);
  return number;
};

const isEven = condition % 2 === 0;

const correctAnswer = isEven ? 'yes' : 'no';

const startEven = commonLogics(task, condition, correctAnswer);

export default startEven;

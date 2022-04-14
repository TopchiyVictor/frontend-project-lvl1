import commonLogics from '../src/index.js';

import getRandomNumber from '../src/random-number.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const decision = () => {
  const condition = getRandomNumber(1, 100);
  const isEven = condition % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [condition, correctAnswer];
};

export default () => commonLogics(task, decision);

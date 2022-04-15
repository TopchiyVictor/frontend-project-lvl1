import getRandomNumber from '../src/random-number.js';

import commonLogics from '../src/index.js';

const task = 'What number is missing in the progression?';

const decision = () => {
  const increaseProgression = getRandomNumber(1, 5);
  const startNumProgression = getRandomNumber(1, 100);
  let nextStepProgression = startNumProgression + increaseProgression;
  const progression = [`${startNumProgression}`];
  for (let i = 1; i <= 9; i += 1) {
    progression.push(` ${nextStepProgression}`);
    nextStepProgression += increaseProgression;
  }
  const indexHiddenNum = getRandomNumber(0, 9);
  const correctAnswer = progression[indexHiddenNum].trim();
  progression[indexHiddenNum] = '..';
  const condition = progression.join(' ');
  return [condition, correctAnswer];
};

export default () => commonLogics(task, decision);

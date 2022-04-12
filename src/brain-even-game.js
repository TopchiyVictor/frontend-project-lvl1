/* eslint-disable comma-dangle */
import readlineSync from 'readline-sync';
import getRandomNumber from './brain-even-random-number.js';

const howManyQuestions = 3;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= howManyQuestions; i += 1) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \n Let's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default brainEven;

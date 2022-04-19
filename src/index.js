/* eslint-disable comma-dangle */
import readlineSync from 'readline-sync';

const maxRounds = 3;

const commonLogics = (task, decision) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 1; i <= maxRounds; i += 1) {
    const [condition, correctAnswer] = decision();
    console.log(`Question: ${condition}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \n Let's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default commonLogics;

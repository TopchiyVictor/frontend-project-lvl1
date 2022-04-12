/* eslint-disable comma-dangle */
import readlineSync from 'readline-sync';

const howManyQuestions = 3;

const commonLogics = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let task;
  console.log(task);
  for (let i = 1; i <= howManyQuestions; i += 1) {
    let condition;
    console.log(`Question: ${condition}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer;
    if (answer === correctAnswer) {
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
export default commonLogics;

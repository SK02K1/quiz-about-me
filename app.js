const readlineSync = require("readline-sync");
const chalk = require('chalk');


const rightAnswerColor = chalk.hex(`#66ff00`);
const wrongAnswerColor = chalk.hex(`#ff0000`);
const questionColor = chalk.hex(`#08F7FE`);
const pink = chalk.hex(`#FF6EC7`);
const orange = chalk.hex(`#FF5F1F`);
const yellow = chalk.hex(`#FFFF00`);



const userName = readlineSync.question(pink("what's your name : "));
console.log("\n");
console.log(`🙏  Namaste ${userName} welcome to DO YOU KNOW sourabh ?`);
console.log("\n");

console.log(`About Quiz 👇`);
console.log(`-------------`);
console.log(yellow(`• The quiz comprises of 5 questions. \n• You will be awarded 1 mark on each correct answer. \n• And no mark will be deducted on wrong answer. \n• Also if you beat the high score your name will be added to TOP PLAYERS LIST.\n`));

let score = 0;

const questionList = [      
  {
    question : `1.I am from? \na.Bangalore\nb.Punjab\nc.Delhi\nd.Uttar Pradesh\n`,
    answer : `c`
  },
  {
    question : `2.My favourite street food dish is? \na.Vada pav\nb.Chole bathure\nc.Tandoori Momo\nd.Masala Dosa\n`,
    answer : `b`
  },
  {
    question : `3.What is my surname? \na.Kumar\nb.Khanna\nc.Kheraliya\nd.Karanwal\n`,
    answer : `c`
  },
  {
    question : `4.What I like to do in my free time? \na.Binge watch netflix\nb.Learn new things\nc.Reading books\nd.Sleep... zzz\n`,
    answer : `b`
  },
  {
    question : `5.Whats my favourite superhero? \na.Superman\nb.Batman\nc.Ironman\nd.Shaktimaan\n`,
    answer : `d`
  }
];

const topScorerList = [
  {
    name : `Robin`,
    score : 4
  },
  {
    name : `Sakshi`,
    score : 3
  }
]


const checkAnswer = (question, rightAnswer) => {
  const userAnswer = readlineSync.question(questionColor(question));
  if(userAnswer.toUpperCase() === rightAnswer.toUpperCase()){
    score+=1;
    console.log(`\n`);
    console.log(`You've entered : ${userAnswer}`);
    console.log(rightAnswerColor((`You're right!`)));
    console.log(`SCORE : ${score}`);
  }else{
    console.log(`\n`);
    console.log(`You've entered : ${userAnswer}`);
    console.log(wrongAnswerColor((`You're wrong!`)));
    console.log(`SCORE : ${score}`);
  }
}

const checkBeatenScore = (currentPlayerScore) => {
  let flag = 0;
  for(let i=0; i<topScorerList.length; i++){
    if(currentPlayerScore > topScorerList[i].score ){
      flag+=1;
    }
  }

  if(flag !== 0){
    console.log(orange(`YAY!  🎉  congratulations, you have beaten the score\nsend me screenshot of your score on insta @sourabh_kheraliya\nto update your name in TOP PLAYERS LIST`));
  }else{
    console.log(orange(`Sorry, but you're not able to beat the score\nBetter luck next time 🤞`));
  }
}

const showTopPlayers = () => {
  console.log(`~~TOP PLAYERS LIST~~\n_____________________`);
  for(let i=0; i<topScorerList.length; i++){
  console.log(pink(`Player name : ${topScorerList[i].name} \nScore : ${topScorerList[i].score}`));
  console.log(`_____________________`);
}
}



for(let i=0; i<questionList.length; i++){
  checkAnswer(questionList[i].question, questionList[i].answer);
  console.log(`----------------------------------------------------`);
  console.log("\n");
}

console.log(`\n`);
console.log(`YOUR FINAL SCORE IS : ${score}`);
console.log('\n');


checkBeatenScore(score);
console.log(`\n`);
showTopPlayers();

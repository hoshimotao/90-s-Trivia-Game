var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector("#modal");
var correctModal = document.querySelector("#correctModal");
var incorrectModal = document.querySelector("#incorrectModal");
var restart = document.querySelector("#restart");
var notice = document.querySelector("body > div:nth-child(2) > h1").innerHTML;


var finalScore = document.querySelector("#modal > p > span");

var score = document.querySelector("#score > h2 > span");

var score2 = 0;




// Open Modal
function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}
function openCorrect() {
  backdrop.style.display = "block";
  correctModal.style.display = "block";
}
function openIncorrect() {
  backdrop.style.display = "block";
  incorrectModal.style.display = "block";
}
//Close Modal
function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

function closeCorrect() {
  backdrop.style.display = "none";
  correctModal.style.display = "none";
}

function closeIncorrect() {
  backdrop.style.display = "none";
  incorrectModal.style.display = "none";
}

// Timer
document.querySelector("#start").addEventListener("click", startGame);

function startGame() {
  console.log("start");
  var timer = 5;
  let int = setInterval(function() {
    console.log(timer);
    timer--;
    document.querySelector("#seconds").innerHTML = timer;
    if (timer === 0) {
      clearInterval(int);
      openModal();
      console.log("modal opened");
      console.log(score.innerHTML);
      console.log(finalScore);
    }
    finalScore.innerHTML = score.innerHTML;
  }, 1000);
}
//
// This block is important and gives us a random question and img

var randNum = Math.floor(Math.random() * questionsAndAnswers.length);

let randomQ = questionsAndAnswers[randNum].question;

document.querySelector("#singleQ").innerHTML = randomQ;

let randomImg = questionsAndAnswers[randNum].image;

document.querySelector("#imgID").src = randomImg;

// block ends here

function newQ() {
  randNum = Math.floor(Math.random() * questionsAndAnswers.length);
  randomQ = questionsAndAnswers[randNum].question;
  document.querySelector("#singleQ").innerHTML = randomQ;
  randomImg = questionsAndAnswers[randNum].image;
  document.querySelector("#imgID").src = randomImg;

  randomAns = questionsAndAnswers[randNum].incorrect;

  correctAns = questionsAndAnswers[randNum].correct;

  newArr = [randomAns[0], randomAns[1], randomAns[2], correctAns];

  newerArray = [];

  if (questionsAndAnswers.length > 0) {
    newCopy = questionsAndAnswers.splice(randNum, 1);
  }
  newAnswers();
}

let randomAns = questionsAndAnswers[randNum].incorrect;

let correctAns = questionsAndAnswers[randNum].correct;

var newArr = [randomAns[0], randomAns[1], randomAns[2], correctAns];

let newerArray = [];

if (questionsAndAnswers.length > 0) {
  let newCopy = questionsAndAnswers.splice(randNum, 1);

  console.log(newCopy);
  console.log(questionsAndAnswers);
}

function newAnswers() {
  while (newArr.length > 0) {
    let rand = Math.floor(Math.random() * newArr.length);
    console.log(newArr[rand]);
    newerArray.push(newArr[rand]);
    newArr.splice(rand, 1);

    document.querySelector("#one").innerHTML = newerArray[0];
    document.querySelector("#two").innerHTML = newerArray[1];
    document.querySelector("#three").innerHTML = newerArray[2];
    document.querySelector("#four").innerHTML = newerArray[3];
  }
}

newQ();

console.log(score);
console.log(score.innerHTML);

// Button one
function oneBtn() {
  if (document.querySelector("#one").innerHTML == correctAns) {
    openCorrect();
    notice = "Nice Job!";
    score2 += 1;
    score.innerHTML = score2;
    
  } else {
    openIncorrect();
    
  }
}
// Button two
function twoBtn() {
  if (document.querySelector("#two").innerHTML == correctAns) {
    openCorrect();
    notice = "Nice Job!";
    score2 += 1;
    score.innerHTML = score2;
    
  } else {
    openIncorrect();
    
  }
}
// Button three
function threeBtn() {
  if (document.querySelector("#three").innerHTML == correctAns) {
    openCorrect();
    notice = "Nice Job!";
    score2 += 1;
    score.innerHTML = score2;
    
  } else {
    openIncorrect();
    
  }
}
// Button four
function fourBtn() {
  if (document.querySelector("#four").innerHTML == correctAns) {
    openCorrect();
    notice = "Nice Job!";
    score2 += 1;
    score.innerHTML = score2;
    
  } else {
    openIncorrect();
    
  }
}

function makeVisible() {
  document.querySelector(".invisible").style.visibility = "visible";
}

function reloadPage() {
  window.location.reload();
}

if (newQ() === false) {
  reloadPage();
}

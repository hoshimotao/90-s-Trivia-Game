// Timer 
document.querySelector("#start").addEventListener("click", startGame);


function startGame(){
  console.log('start')  
  let timer = 60;
  let int = setInterval(function(){
    console.log(timer)
    timer--;
    document.querySelector("#seconds").innerHTML = timer;
    if(timer === 0){
      alert(`Your Score: ${score.innerHTML}`)
      clearInterval(int)
    }
  }, 1000)
}
//
// This block is important and gives us a random question and img

var randNum = Math.floor(Math.random() * questionsAndAnswers.length);

let randomQ = questionsAndAnswers[randNum].question; 

document.querySelector("#singleQ").innerHTML = randomQ;

let randomImg = questionsAndAnswers[randNum].image;

document.querySelector("#imgID").src = randomImg;

// block ends here

function newQ(){

  randNum = Math.floor(Math.random() * questionsAndAnswers.length);
  randomQ = questionsAndAnswers[randNum].question; 
  document.querySelector("#singleQ").innerHTML = randomQ;
  randomImg = questionsAndAnswers[randNum].image;
  document.querySelector("#imgID").src = randomImg;

  
randomAns = questionsAndAnswers[randNum].incorrect;

correctAns = questionsAndAnswers[randNum].correct;

newArr = [randomAns[0], randomAns[1], randomAns[2], correctAns];

newerArray = [];

if(questionsAndAnswers.length > 0){

newCopy = questionsAndAnswers.splice(randNum,1);

}
newAnswers()
}

let randomAns = questionsAndAnswers[randNum].incorrect;

let correctAns = questionsAndAnswers[randNum].correct;

var newArr = [randomAns[0], randomAns[1], randomAns[2], correctAns];

let newerArray = [];

if(questionsAndAnswers.length > 0){

let newCopy = questionsAndAnswers.splice(randNum,1);

console.log(newCopy)
console.log(questionsAndAnswers)
}


function newAnswers(){

while(newArr.length > 0){
  let rand = Math.floor(Math.random() * newArr.length);
  console.log(newArr[rand]);
   newerArray.push(newArr[rand])
   newArr.splice(rand,1);
   
document.querySelector("#one").innerHTML = newerArray[0];
document.querySelector("#two").innerHTML = newerArray[1];
document.querySelector("#three").innerHTML = newerArray[2];
document.querySelector("#four").innerHTML = newerArray[3];
}
}

newQ()

//HERE





var score = document.querySelector("#score > h2 > span");
var score2 = 0;

console.log(score)
console.log(score.innerHTML)

// Button one
function oneBtn(){
  if(document.querySelector("#one").innerHTML == correctAns ){
    alert("That is correct!");
    score2 += 1;
    score.innerHTML = score2;
    newQ();     
  }
  else{
    alert("EPIC FAIL!");
    newQ();    
  }  
}
// Button two
function twoBtn(){
  if(document.querySelector("#two").innerHTML == correctAns ){
    alert("That is correct!");
    score2 += 1;
    score.innerHTML = score2;
    newQ();    
  }
  else{
    alert("EPIC FAIL!");
    newQ();
  }
}
// Button three
function threeBtn(){
  if(document.querySelector("#three").innerHTML == correctAns ){
    alert("That is correct!");
    score2 += 1;
    score.innerHTML = score2;
    newQ();
  }
  else{
    alert("EPIC FAIL!");
    newQ();
  }
}
// Button four
function fourBtn(){
  if(document.querySelector("#four").innerHTML == correctAns ){
    alert("That is correct!");
    score2 += 1;
    score.innerHTML = score2;
    newQ();
    
  }
  else{
    alert("EPIC FAIL!");
    newQ();
  }
}

function makeVisible(){
  document.querySelector(".invisible").style.visibility = "visible";
}

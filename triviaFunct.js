let randNum = Math.floor(Math.random() * questionsAndAnswers.length);

let randomQ = questionsAndAnswers[randNum].question; 

document.querySelector("#singleQ").innerHTML = randomQ;

let randomAns = questionsAndAnswers[randNum].incorrect;

let correctAns = questionsAndAnswers[randNum].correct;

let newArr = [randomAns[0], randomAns[1], randomAns[2], correctAns];



let newerArray = [];


while(newArr.length > 0){

  let rand = Math.floor(Math.random() * newArr.length);

  console.log(newArr[rand]);

   newerArray.push(newArr[rand])

    newArr.splice(rand,1);
  

}

console.log(newerArray)

document.querySelector("#one").innerHTML = newerArray[0];
document.querySelector("#two").innerHTML = newerArray[1];
document.querySelector("#three").innerHTML = newerArray[2];
document.querySelector("#four").innerHTML = newerArray[3];

if(onClick.document.querySelector("#one").innerHTML == questionsAndAnswers.correct ){

  alert("That is correct!")
}
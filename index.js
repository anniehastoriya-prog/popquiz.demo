let score = 0;

let answerInput;
let answer;

// Question 1. all questions will be food related. I want the  question to ask "What sweet food do bees produce?"
// and I want the mutiple choice answer to be honey. I want the user to choose between Honey or Sugarcane.

answerInput = prompt(`What sweet food do bees produce?
 [1] Honey
 [2] Sugarcane
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert(" Enter a number. Honey or Sugarcane");
} else if (answer < 1 || answer > 2) {
  alert("Please enter 1 or 2.");
} else {
  if (answer === 1) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

// Question 2. I want the question to ask " Which country is the largest producer of olive oil?" I want the user to choose between Spain, Russia, or India>
answerInput = prompt(`Which country is the largest producer of olive oil?
    [1] Russia 
    [2] India
    [3] Spain

`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Enter a Number. Russia, India, or Spain");
} else if (answer < 1 || answer > 3) {
  alert("Please Enter 1, 2, or 3.");
} else {
  if (answer === 3) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect!");
  }
}

// Question 3. I want the question to ask "What is the most stolen food item in the world?" I want the user the choose between Cheese, Kimichi, or Apples. I nned the answer to be Cheese.

answerInput = prompt(`What is the most stolen food item in the world?
    [1] Apples
    [2] Cheese
    [3] Kimichi 

`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Enter a Number. Apples, Cheese, or Kimichi");
} else if (answer < 1 || answer > 3) {
  alert("Please Enter 1, 2, or 3.");
} else {
  if (answer === 2) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect!");
  }
}

alert(`You've Completed the quiz.
Your final score is ${score} out of 3.
`);

if (score === 0) {
  alert("Learn More food facts!");
} else if (score === 3) {
  alert("You are a food fact expert!");
} else {
  alert("Maybe you should go steal some cheese!");
}

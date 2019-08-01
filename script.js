// function squareNumber(number) {
//     return number ** 2;
// }
// squareNumber(9);
// // or
// function getSquare(number1) {
//     return number1 * number1;
// }
// getSquare();
// // Both are correct
// function getDouble(Aisha) {
//     return Aisha * 2;
// }
// getDouble()
// // or
// function doDouble(number) {
//     return number + number;
// }
// doDouble();
// // My name
// function greetMe(person) {
//     return "hey " + person + "Love You!!"
// }
// greetMe();
// function getCapital(name) {
//     let n = name.toUpperCase();
//     return n;
// }
// getCapital()
// function getLetters(name) {
//     let n = name.length;
//     return n;
// }
// getLetters();
// Guess the Game
// let count;
// let randomNumber;
// function resetGame() {
//     randomNumber = parseInt(Math.random() * 101);
//     count = 0;
// }
// resetGame();

// function guessGame() {
//     let userInput = parseInt(document.querySelector("input").value);
//     if (userInput > randomNumber) {
//         alert("Sorry!!too much Big");
//     count++;
//     } else if (userInput < randomNumber) {
//         alert("The number is too Small");
//     count++;
//     } else {
//         alert("Congratulations You Won!");

//     }
// };
// const passingMarks = 50;

// function myCall(){

//     let mathsMarks = parseInt(document.querySelector("#maths").Value);
//     let engMarks = parseInt(document.querySelector("#eng").Value);
//     let isMathsPass = mathsMarks >= passingMarks;
//     let isEngPass = engMarks >= passingMarks;

//     let isExamPass = isMathsPass || isEngPass
//         alert(isExamPass);
// }
// let scores = [12, 34, 56, 78, 89];

// function myCall() {
//     let sum = 0;
//     // for (let i = 0; i < scores.length; i++) {
//     //     sum = sum + scores[i];
//     // }
//     scores.forEach(function (element) {
//         sum = sum + element;

//     });
//     let average = sum / scores.length;
//     console.log("Sum " + sum);
//     console.log("Average " + average);
// }
// let human = {
//     name: "Aisha",
//     age: 50,
//     address: {
//         city: "karachi",
//         postalCode: 4565,
//         streetNumber: 2,
//         area: "Lyari"
//     },
//     hobbies: ["reading", "writing"],
//     isHappy: true,
//     eat: function (meal){
//         console.log("Eating" + meal);
//     }
// };
// let randomNumber = parseInt(Math.random() * 100);
// let wrongGuessCount = 0;

// function guessTheNumber() {

//     let userInput = parseInt(document.querySelector("input").value);
//     if (userInput < randomNumber) {
//         alert("Too Small");
//         wrongGuessCount++;
//     } else if (userInput > randomNumber) {
//         alert("Too Big");
//         wrongGuessCount++;
//     } else {
//         alert("Congratulations wrong guesses " + wrongGuessCount);
//         randomNumber = parseInt(Math.random() * 100);
//         wrongGuessCount = 0;
//     }
// }





















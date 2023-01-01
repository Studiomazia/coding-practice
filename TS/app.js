// let firstName: string;
// let experience: number;
// firstName ="Abdul Waheed";
// experience = 12;
// console.log(`Meet my friend ${firstName}, his experience is ${experience}Years.`);
var numGenerator = Math.floor((Math.random() * 10));
console.log(numGenerator);
function userInput(input) {
    if (numGenerator === input) {
        console.log("Hurry up! You guessed the right number.");
    }
    else {
        console.log("Ooops ... Better Luck next time...");
    }
}
userInput(input);

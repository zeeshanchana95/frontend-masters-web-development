let character = "z";
let timesToRepeat = 10;

let result = "";
for(let i=0; i<timesToRepeat; i++) {
    result += character;
}


console.log("".padEnd(timesToRepeat, character));
console.log(result);
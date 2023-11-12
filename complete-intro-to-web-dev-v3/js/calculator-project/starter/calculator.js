let result;
let operator;
let prevInput;

const inputSection = document.querySelector(".input-section");
const myButton = document.querySelector(".button")

console.log("hi")


myButton.addEventListener("click", function(e) {

    console.log(e.target);
    if(e.target.innerText === "0") {
        inputSection.innerText += "0"
    }
    else if(e.target.innerText === "1") {
        inputSection.innerText += "1"
    }
    else if(e.target.innerText === "2") {
        inputSection.innerText += "2"
    }
    else if(e.target.innerText === "3") {
        inputSection.innerText += "3"
    }
    else if(e.target.innerText === "4") {
        inputSection.innerText += "4"
    }
    else if(e.target.innerText === "5") {
        inputSection.innerText += "5"
    }
    else if(e.target.innerText === "6") {
        inputSection.innerText += "6"
    }
    else if(e.target.innerText === "7") {
        inputSection.innerText += "7"
    }
    else if(e.target.innerText === "8") {
        inputSection.innerText += "8"
    }
    else if(e.target.innerText === "9") {
        inputSection.innerText += "9"
    }
    else if(e.target.innerText === "+") {
        operator = "+"
    }
    else if(e.target.innerText === "-") {
        operator = "-"
    }
    else if(e.target.innerText === "&times;") {
        inputSection.innerText += "&times;"
    }
    else if(e.target.innerText === "&divide;") {
        inputSection.innerText += "&divide;"
    }
    else if(e.target.innerText === "C") {
        inputSection.innerText += ""
    }

});
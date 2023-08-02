let numChecker = document.querySelector("#numChecker")
let display = document.querySelector("#display")

function checkNum() {
    if (numChecker.value % 2 == 0) {
        display.innerHTML = "The number is Even"
    }
    else if (numChecker.value % 2 == 1 ) {
        display.innerHTML = "The number is Odd"
    }
    else {
        display.innerHTML = "Enter a valid number"
    }
    
}

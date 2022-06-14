let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById('sum-el')


// Create four functions: add(), subtract(), divide(), multiply()
document.getElementById('add-button').addEventListener('click', addFunction)
function addFunction(){
    
    let add = (num1 + num2)
    sum.textContent = 'Sum: ' + add
}
addFunction()

document.getElementById('div-button').addEventListener('click', divFunction)
function divFunction(){
    
    let div = (num1 / num2)
    sum.textContent ='Sum: ' + div
}

divFunction()

document.getElementById('mul-button').addEventListener('click', mulFunction)
function mulFunction(){

    let mul = (num1 * num2)
    sum.textContent = 'Sum: ' + mul
}

mulFunction()

document.getElementById('sub-button').addEventListener('click', subFunction)
function subFunction(){
    let sub = (num1 - num2)
    sum.textContent = 'Sum: ' + sub
}

subFunction()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"


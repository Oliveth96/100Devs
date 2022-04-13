//Write your pseudo code first!

document.querySelector('h1').addEventListener('click', convert)

function convert(){
    //need the value
    let enteredValue = Number(document.querySelector('input').value)

    //convert value from celsius to fahrenheit
    let temp = enteredValue * 1.8 + 32

    //show value to the user
    document.querySelector('h2').innerText = temp
}


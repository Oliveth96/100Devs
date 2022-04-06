//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', plsDrinkWater)

function plsDrinkWater () {
    let numOfDrinks = Number(document.querySelector('input').value)
    document.querySelector('#DRINK').innerText = ""
    for (let i = 1; i <= numOfDrinks; i++) {
        document.querySelector ('#DRINK'),innerText += ' DRINK'
    }
}
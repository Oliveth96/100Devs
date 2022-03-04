let total = 0

document.querySelector('#dial').addEventListener('click', makeZero)
document.querySelector('#nenne').addEventListener('click', independenceDay)
document.querySelector('#beans').addEventListener('click', favorite)
document.querySelector('#alx').addEventListener('click', sub2)

function makeZero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
}

function independenceDay() {
    total = total + 6
    document.querySelector('#placeToPutResult').innerText = total
}

function favorite() {
    total = total + 4
    document.querySelector('#placeToPutResult').innerText = total
}

function sub2() {
    total = total - 5
    document.querySelector('#placeToPutResult').innerText =total
}
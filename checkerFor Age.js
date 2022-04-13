//Create a conditional that checks their age

//let age = 5
// If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

if (age < 16) {
    console.log ("THEY CANNOT DRIVE")
} else if (age < 18) {
    console.log('THEY CAN\'T HATE FROM OUTSIDE THE CLUB, BECAUSE THEY CAN\'T GET IN')
} else if (age < 21) {
    console.log("THEY CANNOT DRINK")
} else if (age < 25){
    console.log("THEY CANNOT RENT CARS AFFORDABLY")
} else if (age < 30) {
    console. log ("THEY CANNOT RENT BEAUTIFUL CARS AFFORDABLY")
} else if (age < 30 || age > 30) {
    console.log("THERE'S NOTHING LEFT TO LOOK FOR OTHER THAN #100DEVS")
} else {
    console.log('SOMETHING COOL')
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let age = Number(document.querySelector('input').value)
document.querySelector ('h1').addEventListener('click', takeValueInput)
let p = document.querySelector ('p')
function takeValueInput () {
    let age = Number(document.querySelector('input').value) 

    if (age < 16) {
        p.innerText = "THEY CANNOT DRIVE"
    } else if (age < 18) {
        p.innerText = 'THEY CAN\'T HATE FROM OUTSIDE THE CLUB, BECAUSE THEY CAN\'T GET IN'
    } else if (age < 21) {
        p.innerText = "THEY CANNOT DRINK"
    } else if (age < 25){
        p.innerText = "THEY CANNOT RENT CARS AFFORDABLY"
    } else if (age < 30) {
        p.innerText = "THEY CANNOT RENT BEAUTIFUL CARS AFFORDABLY"
    } else if (age < 30 || age > 30) {
        p.innerText = "THERE'S NOTHING LEFT TO LOOK FOR OTHER THAN #100DEVS"
    } else {
        p.innerText = 'SOMETHING COOL'
    }
}
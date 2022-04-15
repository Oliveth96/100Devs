//Create an array of movie titles. Loop through the array and add each element to the h2.

let movieTitle = ['beloved','the hate you give','when you see me','Mr Ibu']
for(let i = 0; i < movieTitle.length; i++) {
    document.querySelector('h2').innerText += movies[i]  
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let arrNumber = [50, 200, 67, 82, 90, -1]


arrNumber .forEach ((item, i) => {
    arrNumber[i] = item + 3
})

//Find the average of all the numbers from question two
let averageNumber = [50, 200, 67, 82, 90, 1]
let sum = 0

averageNumber. forEach((num) => sum += averageNumber)
// for (let i = 0; i < averageNumber.length; i++){
//    sum += averageNumber[i] // sum = sum + averageNumber[i]
// }
 
//Arrays

//Create and array of numbers. 
// Sum all of the numbers. Alert the sum.

let arrNumber = [2, 4, 10, 25]
let sum = arrNumber.reduce ((acc, c) => acc + c, 0)
alert (sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = arrNumber => arrNumber.map ( num => num**2) //We can also use math.pow()
console.log()

//Create a function that takes a string
//Print the reverse of that string to the console

let unoReverse = str => console.log (str.split('').reverse().join('') ) //split takes it and turns it into an array, reverse takes and does the reverse, join('') joins it back together to form a string

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => alert( str === str.split(' ').reverse().join('') )

palindromeCheck('racecar') 
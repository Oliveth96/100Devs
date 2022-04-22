//Arrays

//Create and array of tv shows. 
//Loop through and print each show to the console

let arrTvShow = ['Friend', 'how I met your mother', 'just laughs','Vincenzo']
for (let i = 0; i < arrTvShow.length; i++){
    console.log(arrTvShow[i])
}
// arrTvShow.forEach (i => console.log(i))


//Create an array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrNumbers = [3, 5, 9, 44, 78, 99]
let onlyEvenNumbers = arr => arr.filter( n => n  % 2 === 0)

console.log( onlyEvenNumbers( arrNumbers))
 
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowestAndHightest(arr) {
    let sorted = arr.sort((a,b)=> a-b) // (a,b) from lowest to highest. (b,a) will be from highest to low
    alert( sorted[1] + sorted[arr.length -2] )
}
''   
secondLowestAndHightest([2,3,1,5,4]) 
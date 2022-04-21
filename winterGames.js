//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array 
// (do not use map or filter)

function takeInArray (arr) {
   let evens = []

   arr.forEach( n => {
       if ( n % 2 === 0) {
           evens.push(n)
       }
   })

   return evens
}

console.log (takeInArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 64]) )

//Other Array Methods

//Arr Name.push() - Adds item at the end of the array
//ArrName .pop() - Removes item at the beginning of the array
//ArrName.shift() - Removes the item at the beginning of the array i.e index[0]
//ArrName.unshift() - Adds item at the beginning of the array i.e [arr.length -1]
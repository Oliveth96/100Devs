// Create a function that takes in an array. 
//If the first number, is less than the last number, alert "Hi". 
//If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour".

let numbs = [10, 20, 30, 40, 50]


/***
 *  function takeArray (arr){
    let x = arr[0]
    let y = arr[arr.length -1]
    if (x < y){
        alert ("Hi")

    } else if (x > y){
        alert ("BYE")

    } else {
        alert("We close in an hour")
    }
}
*/

function checkFirstAndLast(arr){
    if (arr[0] < arr[arr.length -1]){
        alert ("Hi")

    } else if (arr[0] > arr[arr.length -1]){
        alert ("BYE")

    } else {
        alert("We close in an hour")
    }   
}
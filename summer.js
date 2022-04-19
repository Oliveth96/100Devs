//Create a function that takes in an array of numbers. 
//Multiply each number together and alert the product. 


function arrayOfNumbers(arr){
    let product = 1
    arr.forEach( num => product *= num )
    alert (product)
}
arrayOfNumbers([10, 6, 9]) 

function multiNumbsInArr(arr){
    let product = 1
    for(let i = 0; i < arr.length; i++){
        product *= arr[i]
    }

    alert(product)
}
multiNumbsInArr([10,2,3])
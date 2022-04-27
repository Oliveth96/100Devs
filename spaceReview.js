//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.

let arrNumber = [23, 4, 5, 10, 78]

let sum = arrNumber.reduce( (acc, c) => acc + c, 0  ) 

alert(sum)



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = arrNumber => arrNumber.map ( num => num**2) //We can also use math.pow()
console.log()

//Create a function that takes in array of strings
//Print the reverse of that string to the console
 

function reverseArray(array){
    array.reverse();
    console.log(array);
}

reverseArray( ['oliveth', 'Ebelechukwu', 'Ndubuka'])

//Create a function that takes in a string
//Alert if the string is a palindrome or not


function palindromeCheck (str){
    let re = /[\W_]/g; // /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    alert (reverseStr === lowRegStr);
}

palindromeCheck("A man, a plan, a canal. panama ")

function anotherPalindromeTest(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    let re = /[^A-Za-z0-9]/g;
    
    let lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is"
    // str.replace(/[\W_]/g, '') = "is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is".replace(/[\W_]/g, '') = "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis"
    // let lowRegStr = "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis";
       
    // Step 2. Use the same chaining methods with built-in functions to Reverse the String'
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["i", "s", "i", "t", "c", "r", "a", "z", "y", "h", "o", "w", "s","a","y","i","n","g","s", "e", "n", "t", "e", "n", "c", "e", "s","b", "a", "c","k", "w","a", "r", "d", "s", "s", "e","n","t","e","n","c","e","s","s","a","y","i","n","g","h","o","w","c","r","a","z","y","i","t","i","s"].reverse() = ["i", "s", "i", "t", "c", "r", "a", "z", "y", "h", "o", "w", "s","a","y","i","n","g","s", "e", "n", "t", "e", "n", "c", "e", "s","b", "a", "c","k", "w","a", "r", "d", "s", "s", "e","n","t","e","n","c","e","s","s","a","y","i","n","g","h","o","w","c","r","a","z","y","i","t","i","s"]
    // ["i", "s", "i", "t", "c", "r", "a", "z", "y", "h", "o", "w", "s","a","y","i","n","g","s", "e", "n", "t", "e", "n", "c", "e", "s","b", "a", "c","k", "w","a", "r", "d", "s", "s", "e","n","t","e","n","c","e","s","s","a","y","i","n","g","h","o","w","c","r","a","z","y","i","t","i","s"].join('') = "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis"
    // So, "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis".split('').reverse().join('') = "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis";
    // And, let reverseStr = "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis";
     
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis" === "isitcrazyhowsayingsentencesbackwardscreatesbackwardssentencessayinghowcrazyitis"? => true
  }
   
  palindrome("Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is");
  
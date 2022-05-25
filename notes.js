var greeting = "Hello";
greeting + " World!" //Hello World!
greeting + " Oliveth" // Hello Oliveth

/** CONVERTING TEMPERATURES
 * The Formula to convert celsius to Fahrenheit
 * F = C x 1.8 + 32
 * Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
 */

let celsius = 12
let fahrenheit = (celsius * 1.8 + 32 );
console.log(fahrenheit);


var haiku = "JANUARY"+"\nDelightful display"+"\nSnowdrops bow their pure white heads"+"\nTo the sun's glory";
console.log(haiku)
/**
 * BOOLEANS
 */
 var a = 10;
 var b = 20;
 // a comparison - we will study this in detail in upcoming lesson
 if (a>b) // The outcome of a>b will be a boolean
     console.log("Variable `a` has higher value"); // if a>b is true
 else 
     console.log("Variable `b` has higher value"); // if a>b is false
// Variable `b` has higher value

/**
 * NULL: "value of nothing"
 * UNDEFINED: "absence of value"
 * NAN: " stands for "Not-A-Number" and it's often returned indicating an error with number operations"
 */
// calculating the square root of a negative number will return NaN
Math.sqrt(-10)

// trying to divide a string by 5 will return NaN
"hello"/5

/**
 * Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). 
 * Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
 * Print the total to the JavaScript console.
 */
 var bill = 10.25 + 3.99 + 7.15;
 var tip = 0.15 * bill;
 var total = bill + tip;
 console.log("$"+total)

/*
 * Programming Quiz: MadLibs (2-11)
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */
 
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3 +" content!";
console.log(madLib);

/*
 * Programming Quiz: One Awesome Message (2-12)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */
let firstName = "Ebelechukwu Olive Ndubuka";
let interest = ["seeing movies", "listening to music", "and going to the beach"];
let hobby = "eat to good food";
awesomeMessage =  "Hi, my name is "+ firstName +". I love "+ interest +". In my spare time, I like to  "+ hobby +"."
console.log(awesomeMessage)

/**
 * Write an if...else statement that:
    prints "even" if the number is an even number
    prints "odd" if the number is an odd number
 */
/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */
 
 
// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")

}
/*
 * Programming Quiz: Musical Groups (3-3)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements
var musicians = 1;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if(musicians === 2) {
    console.log ("duet");
} else if (musicians === 4) {
    console.log("quartet");
} else{
    console.log("this is a large group");
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'ballroom' && suspect ==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true;

} else if (room === 'gallery' && suspect = "Ms. Van Cleve") {
    weapon = 'trophy';
    solved = true;

} else if (room === 'billiards room' && suspect ==="Mrs. Sparr") {
    weapon = 'pool stick';
    solved = true;
} 
else if (room === 'dining room' && suspect ==="Mr. Parkes") {
    weapon = 'knife';
    solved = true;
}   
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === true) {
    
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }

    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";


// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".")
}

/* Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/
var shirtWidth = 21;
var shirtLength = 99;
var shirtSleeve = 8.40;

var size = "NA";
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
    size = "S";

} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 < 30 ) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = "M";

} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
    size = "L";

} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
    size = "XL";

} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
    size = "2XL";

} 
else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)){
    size = "3XL"

}
else {
    size = "NA";
}
console.log(size);

/**Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN (stands for "not a number", check out the NaN MDN article)

conditional ? (if condition is true) : (if condition is false)
 */
var isGoing = true;
var color = isGoing ? "green" : "red"; //To use the ternary operator, first provide a conditional statement on the left-side of the ?. Then, between the ? and : write the code that would run if the condition is true and on the right-hand side of the : write the code that would run if the condition is false
console.log(color);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category);

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
} /**
You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.
*/

var winner = 3;

switch (winner) {
    case 1:
      prize += "a trip for two to the Bahamas and ";
    case 2:
      prize += "a four piece furniture set.";
      break;
    case 3:
      prize += "a smartwatch and ";
    default:
      prize += "tickets to the circus.";
  }
  
  console.log("You've won " + prize);
  // You've won a smartwatch and tickets to the circus

  /*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';
var salary = $25636;

switch (education){
    case "no high school diploma":
        salary = $25636;
        break;

    case "a high school diploma":
        salary = $35256;
        break;
    
    case "an Associate's degree":
        salary = $41496;
        break;

    case "a Bachelor's degree":
        salary = $59124;
        break;

    case "a Master's degree":
        salary = $69732;
        break;

    case "a Professional degree":
        salary = $89960;
        break;

    case "a Doctoral degree":
        salary = 84396;
        break;
    
}

console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
// 0,2 4, 6, 8

/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    } else if (x % 5 === 0){
        console.log("James");
    } else if (x % 3 === 0){
        console.log("Julia");
    } 
    else{
        console.log(x);
    }
    x = x + 1 ;
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var x = 60;
while (x >= 0){
    if (x === 50){
        console.log ("Orbiter transfers from ground to internal power")
    }
    else if (x === 31){
        console.log("Ground launch sequencer is go for auto sequence start")
    }
    else if (x === 16){
        console.log("Activate launch pad sound suppression system")
    }
    else if (x === 10){
        console.log("Activate main engine hydrogen burnoff system")
    }
    else if (x === 6){
        console.log("Main engine start")
    }
    else if (x === 0){
        console.log("Solid rocket booster ignition and liftoff!")
    }
    else{
        console.log ("T - + x +seconds")
    }
    x = x - 1;
}

for (var i = 0; i < 6; i = i + 1) {
    console.log("Printing out i = " + i);
}

for (var i = 0; i <= 6; i = i + 2) {
    console.log(i);
}
// 0,2,4,6

//Nested Loops
for (var x = 0; x < 3; x = x + 1) {
    for (var y = 0; y < 2; y = y + 1) {
      console.log(x + "," + y);
    }
}
//Increment Operators
x++ or ++x // same as x = x + 1 
/**
 * Note that x++ returns the original value of x before the increment
 * while ++x does the increment before returning the value of x
 */
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5

/*
 * Programming Quiz: Factorials (4-7)
 * Write a for (note: not a function) loop that prints out the factorial of the number 12:
 */
let solution = 1;
let 

for (let i = 1; i <= 12; i++){
    solution *= i;
}
console.log(solution);

/*
 * Global scope. 
 * This variable declared outside of any function is called Global variable. 
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
    // Local variable, visible within the function `showMessage`
    var message = "I am an Udacian!"; 

    // Block scope
    {
          let greet = "How are you doing?";
        /*
         * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope. 
         */
    } // block scope ends

    console.log( message ); // OK
    console.log( greet ); // ERROR. 
    // Variable greet can NOT be used outside the block

    console.log( opinion ); // OK    to use the gobal variable anywhere in the code

} // function scope ends


/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for (var x = 0; x < 16; x = x + 1) {
    for (var y = 0; y < 100; y = y + 1) {
      console.log(x + "-" + y);
    }
}

/*
* FUNCTIONSSSSSSSS
* FUNCTION THAT REVERSES A STRING
*/
function reverseString(reverseMe) {
    let reversed = "";

    for (let i = reverseMe.length -1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log(reverseString("Oliveth"));

// accepts no parameters! parentheses are empty
// declares the sayHello function
function sayHello() {
    var message = "Hello!"
    return message; // returns value instead of printing it
}
  
// function returns "Hello!" and console.log prints the return value
console.log(sayHello());

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

function laugh() {
    var message = "hahahahahahahahahaha!"
    return message;
}

console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 * Write a function called laugh() that takes one parameter, 
 * num that represents the number of "ha"s to return.
 * 
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */
let makeSound = "";
function laugh(num) {
    for (var x = 0; x < num; x = x + 1) {
        makeSound = makeSound + "ha";
    }
    makeSound = makeSound+ +"!";
    return makeSound;
}

console.log(laugh(3));

/*
* A FUNCTION to tell me if an integer > 2 is a prime number
*/
function isPrimeNumber(int) {
    for (let x = 2; x < int; x++) {
        if (int % x === 0) {
            console.log (int + " is divisible by " + x);
            return false;
        }

        return true;
    }
}

isPrimeNumber(49);

// SCOPE
/** GLOBAL SCOPE
* Identifiers can be accessed everywhere within your program. 
* This means any function located anywhere in your program can benefit from variables defined in the scope
*/
var james = 'I a looking for thi book ........';

/** FUNCTION SCOPE
 * identifiers can be accessed everywhere inside the function it was defined in
 * This means only the function or functions within the function can benefit from the variables defined therein
 */
function library() {
    var librarian = " Oh .........................";
    function classicLiterature (){
        var book = "Great Expectations";
    }
}

// shadowing
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish(){
    bookTitle = "The Little Prince";
    console.log(bookTitle);
}

displayBookEnglish ();
console.log(bookTitle);
// output is The little prince because pf the reassignment. 
// To prevent this, add var to line 839
/**
 * If an identifier is declared in global scope, it's available everywhere.
 * If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
 * When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
 * Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.
 */

//HOISTING
/**
 * JavaScript hoists function declarations and variable declarations to the top of the current scope.
 * Variable assignments are not hoisted.
 * Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.
 */

 sayHi("Julia");

 function sayHi(name) {
   console.log(greeting + " " + name);
   var greeting;
} // Undefined Julia

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
} // Undefined Julia

function sayHi(name) {
    var greeting = "Hello";
    console.log(greeting + " " + name);
}
  
sayHi("Julia");
// Hello Julia

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */
// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    var lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10));

/**
 * FUNCTION EXPRESSION
 */

// anonymous function expression
var doSomething = function(y) {
    return y + 1;
};
// named function expression
var doSomething = function addOne(y) {
    return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5);

var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
}; // Notice how the function keyword no longer has a name.
// It's an anonymous function, a function with no name, and you've stored it in a variable called catSays.

// function expression catSays & Callback function
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
};
  
// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
}
  
// pass in catSays as a callback function
helloCat(catSays);

var laugh = function(x){
    var kikiki = "";
    for (i = 0; i < x; i++){
        kikiki = kikiki + 'ha';
    }
    kikiki = kikiki +"!";
    return kikiki;
};

console.log(laugh(10));
// hahahahahahahahahaha!

/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here

var cry = function shedNoTears(y) {
    return 'boohoo!';
};

console.log(cry()) ;

/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions ("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});

//ARRAYS
// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];
var arraysInArrays = [
    [1, 2, 3], 
    ["Julia", "James"], 
    [true, false, true, false]
];

donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]); 
// Prints: "glazed cruller"


/*
 * Programming Quiz: UdaciFamily (6-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `udaciFamily`
 * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
 * - Your code should print `udaciFamily` to the console
 * - BE CAREFUL ABOUT THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here
udaciFamily = ["Julia", "James", "Oliveth"]
console.log(udaciFamily)


/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = 2;
prices[2] = 4;
prices[6] = 6;

//ARRAY PROPERTIES AND METHODS
/**
 * reverse: reverses the order of the elements in an array
 * sort: sorts the elements in an array
 * Push & Pop: two methods that allow us to add and remove elements in an array
 */

 var donuts = ["glazed", "powdered", "sprinkled"];
 console.log(donuts.length); // 3

// You can use the push() method to add elements to the end of an array.
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered");
// Alternatively, you can use the pop() method to remove elements from the end of an array.
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];
donuts.pop(); 

// splice() is another handy method that allows you to add and remove elements from anywhere within an array.
// splice() lets you specify the index location to add new elements, as well as the number of elements you'd like to delete (if any).
/**
 * arrayName.splice(arg1, arg2, item1, ....., itemX);
 * 
 */
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
// ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]

var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2, 0, "chocolate frosted", "glazed");
// [cookie, chocolate frosted, glazed, cinnamom sugar, creme de leche]


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(x) {
    if (x.length >= 7){
        return true ;
    } else
    {
        return false ;
    }
}
console.log(hasEnoughPlayers(team));


/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);

var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
turnMeIntoAString.join()
console.log(turnMeIntoAString)

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
} // ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});


/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above. 
 */
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var totals = bills.map(function (add){
    add *= 0.15;
    add = add.toFixed(2);
    add = Number(add);
    return add;
});

console.log(totals);

//ARRAY IN ARRAY
var arraysInArrays = [
    [1, 2, 3], 
    ["Julia", "James"], 
    [true, false, true, false]
];
for (var r = 0; r < arraysInArrays.length; r++){
    for (var c = 0; c < arraysInArrays[r].length; c++){
        console.log(arraysInArrays[r][c]);
    }
}

var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
];
for (var row = 0; row < donutBox.length; row++) {
    // here, donutBox[row].length refers to the length of the donut array currently being looped over
    for (var column = 0; column < donutBox[row].length; column++) {
      console.log(donutBox[row][column]);
    }
}

/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var r = 0; r < numbers.length; r++) {
    for (var c = 0; c < numbers[r].length; c++) {
        if (numbers[r][c] % 2 === 0){
            numbers[r][c] = "even"
        }
        else{
            numbers[r][c] = "odd"
        }
    }
}
console.log(numbers);


// OBJECTS IN JAVASCRIPT
/**
 * AN Object is a data structure in JS that lets yu store data about a particular thing, and helps you keep track of that data by using a key.
 */
var umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
    }
};

/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have a `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function(){
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            return "The umbrella is already closed!";
        }
    }
};

var personalDetails ={
    name: "Oliveth",
    age: 26,
    parents:["Ebelechukwu Ndubuka", "Donatus Ndubuka"],
    favColor: ["purple"],
    favFood: ["beans"],
    pets: true;
    makesHair: function() {
        return "Oliveth makes Natural Hair!"
    }
}

personalDetails.makesHair();//'Oliveth makes Natural Hair!'


/*
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */
var breakfast = {
    name: "The Lumberjack",
    price: '$9.95',
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}
console.log(breakfast);

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary(){
        return ("Welcome\nYour balance is currently $1000 and your interest rate is 1%.")
    }
};

console.log(savingsAccount.printAccountSummary());


/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

var facebookProfile ={
    name: "Ebelechukwu Olive Ndubuka",
    noOfFriends: 123456,
    messages:["Hello, How are you today.", "Have you had lunch today?", "Abeg you fit do me urgent 2k?","Hope you slept well", "Are you available to chill and flex"],
    
    postMessage(message){
        if (message > 0) {
            facebookProfile.messages += message;
        }
    },
    deleteMessage (index) {
        if (index > 0) {
            facebookProfile.messages -= index;
        }
    },
    addFriend(x){
        if (x > 0){
            facebookProfile.noOfFriends += x;
        }
    },
    removeFriend(x){
        if (x > 0){
            facebookProfile.noOfFriends -= x;
        }
    },
};

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(donut){
   console.log(donut.type+" donuts cost $"+donut.cost+" each");
});


function Train(){
    this.sound = "cho cho!";
}

let Magnum = new Train();
let Sonic = new Train();

Train.prototype = {
    speed: 350
}

function incrementSpeed(train){
    return train.speed + 50;
}
incrementSpeed(Magnum);

function Item(name, amountInStock, price){
    this.name = name;
    this.amountInStock = amountInStock;
    this.price = price;

    this.purchase = function(){
        this.amountInStock = this.amountInStock - 1;
    }
}

let biscuit = new Item("biscuit", 100, 1.99);

for (let i = 0; i < 10; i++){
    biscuit.purchase();
}
console.log(biscuit.amountInStock);
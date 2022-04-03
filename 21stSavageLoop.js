//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function loopPrint() {
   for(let i = 1; i < 22; i++) {
       console.log(21)
   }
}

loopPrint()

//Bonus can you make it print '21' 21 times to the dom?
function loopPrint() {
    for(let i = 1; i < 22; i++) {
        document.querySelector('#savageSays').innerText += " 21" // This concatenates it
    }
 }



//for loop syntax
for (let i = 1; i < 10; i++) {
    console.log (i)
}

//while loop syntax
let count = 0

while (count < 5) {
    console.log(count)
    count++
}
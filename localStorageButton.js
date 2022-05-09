//Create a button that adds 1 to a botScore stored in localStorage 

if (! localStorage.getItem('botScore')){ //Here, if it is not NULL/FAlse, do this.
    localStorage.setItem('botScore', 0) //on page load, this sets bot score to 0
    //The above basically means if, when I try to getItem, and it's true, (i.e not false), set bot score to 0 and continue adding
}


// A clickEvent that calls the function addAnotherOne. little smurfs
document.querySelector('button').addEventListener('click', addAnotherOne) //When we click the button, it runs another one

function addAnotherOne(){ //the function executes the following
    //The first we do is get the value out of local storage and store into the variable
    let botScoreValue = Number (localStorage.getItem('botScore'))
    //then we add 1 to the variable
    botScoreValue += 1
    //once we've added 1 to the variable, we reset the bot score to be what it was plus 1
    localStorage.setItem('botScore', botScoreValue)
}


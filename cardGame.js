//Example fetch using https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
//A fetch that grabs the deckID

let deckId = " "

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') 
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
        deckId = data.deck_id
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

//The code below: when I refresh/ on page load, the fetch below runs. It gets a deck of cards and stores the ID for that deck in the global variable - deckID. Whenever we click the button, the ID gotten on pageload is used to draw tow cards
document.querySelector ('button').addEventListener('click', drawCards)

function drawCards (){
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

    fetch(url) 
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
        // deckId = data.deck_id
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}




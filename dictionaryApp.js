//Get a random word and meaning from the dictionary api and place the word and meaning in the DOM

fetch("https://random-words-api.vercel.app/word")
.then(res => res.json()) //parse response as JSON
.then(Object => {
    console.log(Object[0])
      //Every time I refresh, I make a request to the server and the server send a new object containing a url link, which sends cute pics of dogs.
})
.catch (err => {
    console.log('error ${err}')
});
 
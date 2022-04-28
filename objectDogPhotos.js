//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()) //parse response as JSON
.then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message  //Every time I refresh, I make a request to the server and the server send a new object containing a url link, which sends cute pics of dogs.
})
.catch (err => {
    console.log('error ${err}')
});
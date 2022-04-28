fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
    })
    .catch (err => {
        console.log('error ${err}')
    });
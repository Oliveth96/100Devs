//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.currentTime = 3
stopwatch.brandName = 'Casio'

stopwatch.start = function(){
    console.log('STARTTTTTTIIIINNNNGGG')
}

stopwatch.stop = function(){
    console.log('STOOOOPPPPING')
}

stopwatch.sayBrand = function(){
    console.log( stopwatch.brandName )
}

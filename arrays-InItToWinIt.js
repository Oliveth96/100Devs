//Create an array of movies with at least three movies.

let movies = ['jumong','vincenzo','Empress ki']

//Using the array from above, store the first movie in a variable

let kDrama = movies[0] //Output is 'jumong'

//Get the length of the original array and store it in a new variable

let KoreanMovies = movies.length
console.log(KoreanMovies) //Output is 3

//Get the last element in that array and store it in a new variable. 

let myMovies = movies[2] //Output is 'Empress ki'

// Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastElement = movies [movies.length - 1] 
// or lastElement = movies[ KoreanMovies -1] Remember we already assigned the length of movies to the variable - KoreanMovies earlier on
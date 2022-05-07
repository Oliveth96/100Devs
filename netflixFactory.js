//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTVShowFactory {
    constructor (title, genre, parentalGuidance, ratings) {
        this.title = title
        this. genre = genre
        this.parentalGuidance = parentalGuidance
        this.ratings = ratings

    }
    play() {
        console.log ('Playing ...')
    }
    stop (){
        console.log ('Stopping ....')
    }
    addToList () {
        console.log('Added To List')
    }
}

let meBeforeYou = new NetflixTVShowFactory ('Me Before you', 'romance', 16, 5)
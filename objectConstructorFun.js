//Create a constructor with 4 properties and 3 methods
//JavaScript ES6+ syntax 
class SodaDrinkFactory {
    constructor (sodaBrand, sodaFlavor, sodaAlcoholicContent, sodaSize) {
        this.brand = sodaBrand
        this.flavor = sodaFlavor
        this.alcoholicContent = sodaAlcoholicContent
        this.size = sodaSize
        
    }

    popSound (){
        console.log('pop pop pop pop')
    }
    getHigh (){
        console.log('WE HIGHHHHHHHHH')
    }
}

let pepsi = new SodaDrinkFactory ('pepsi', 'cola', 'false', '50cl')

let baileys = new SodaDrinkFactory ('Bailey Creamy Drink', 'cream', true, '200cl')
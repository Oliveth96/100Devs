//Create a constructor with 4 properties and 3 methods

class SodaDrinkFactory {
    constructor(sodaBrand, sodaFlavor, sodaAlcoholicContent, sodaSize) {
        this.brand = sodaBrand
        this.toppings = sodaFlavor
        this.alcoholicContent = sodaAlcoholicContent
        this.size = sodaSize

        this.popSound = function(){
            console.log('pop pop pop pop')
        }
        this.getHigh = function(){
            console.log('WE HIGHHHHHHHHH')
        }
        
    }
}

let pepsi = new SodaDrinkFactory ('pepsi', 'cola', 'false', '50cl')

let baileys = new SodaDrinkFactory ('Bailey Creamy Drink', 'cream', true, '200cl')
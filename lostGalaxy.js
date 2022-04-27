//Create a mouse object that has four properties and three methods

function MakeMouse(mouseColor, mouseShape, mouseSize, mouseBrandName){
    this.color = 'black'
    this.shape = 'round'
    this.size = 'small'
    this.brandName = 'Apple' 
    this.leftClick = function(){
        alert('LEFT CLICKKKKKKKKK')
    }
    
    this.rightClick = function(){
        alert('RIGHT CLICCKKKKKK')
    }
    
    this.scroll = function(){
        alert( 'JUMP JUMP JUMP' )
    }
}


let mouseOne = new MakeMouse ('Silver', 'Oblong', 'Medium', 'Lifewire')

let mouseFour = new MakeMouse('Grey', 'Square', 'Small', 'Apple')


// Car Factory Constructor
function ProduceCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.Model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert ('BEEP', "BEEP")
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}

let mouse = {}

mouse.color = 'black'
mouse.shape = 'round'
mouse.size = 'small'
mouse.brandName = 'Lifewire'

mouse.leftClick = function(){
    console.log('LEFT CLICKKKKKKKKK')
}

mouse.rightClick = function(){
    console.log('RIGHT CLICCKKKKKK')
}

mouse.scroll = function(){
    console.log( 'JUMP JUMP JUMP' )
}

let mouseToo = {}

mouseToo.brand = 'Apple'
mouseToo.color = "silver"
mouseToo.model = "MagicTrackpad 2"
mouseToo.wireless = true

mouse.leftClick = function(){
    console.log('LEFT CLICKKKKKKKKK')
}

mouse.rightClick = function(){
    console.log('RIGHT CLICCKKKKKK')
}

mouse.scroll = function(){
    console.log( 'JUMP JUMP JUMP' )
} 

//Create a dog object that has four properties and three methods

let dog = {}

dog.name = "Thelma "
dog.breed = "Caucasian"
dog.color = "golden"
dog.legs = 4

dog.bark = function() {
    console.log("WOOF WOOF WOOF")
}

dog.jump = function () {
    console.log ('BLAST OFF')
}

dog.fetch = function() {
    console.log('ZOOOOOOOOOOOM')
}
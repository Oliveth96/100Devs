//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.brand = "Dominos"
pizza.toppings =['pepperoni', 'onion', 'spinach','meatzzza']
pizza.crust = "double-decker"
pizza.size = "large"

pizza.estimatedDeliveryTime = function(){
    console.log('Calculating ......')
}
pizza.burnMouth = function(){
    console.log('ooooooohhhh')
}
pizza.frisbee = function (){
    console.log("YEEEEEEEEEEE!")
}

class PizzaFactory {
    constructor(pizzaBrand, pizzaToppings, pizzaCrust, pizzaSize) {
        this.brand = pizzaBrand
        this.toppings = pizzaToppings
        this.crust = pizzaCrust
        this.size = pizzaSize
    }
}

let deboniarsPizza = new PizzaFactory ('Debonairs', ['meatzzza','garlic','peperoni'], 'double-decker', 'Medium')
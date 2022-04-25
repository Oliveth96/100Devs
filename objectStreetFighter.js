//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(gameSex, gameModel, gameMake, gameHairColor){
    this.sex = gameSex
    this.model = gameModel
    this.make = gameMake
    this.hairColor = gameHairColor

    this.pose = function(){
        alert('STRIKE A POSE')
    }
    this.fightPattern = function() {
        "use TAEKWONDO moves only"
    }
    this.environment = function(){
        "boxing ring"
    }
}


let Ollie = new MakeStreetFighter('Female', 'slender', 'Lego Ninja', 'Honey Brown')

//Leon's View
function MakeSFCharacter (punch, kick, catchPhrase, specialMove) {
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove 
    
    this.taunt = function(){
        console.log("YOU CANT'T HANDLE MY ${this.specialMovie}")
    }

    this.winning = function (){
        console.log ('Haha $ {this.catchPhrase}')
    }

    this.dash = function() {
        console.log ('Whooooop, missed me!')
    }
    
}

let ryu = new MakeSFCharacter('high', 'high', 'Get OVER HERE', 'HADDDDDDUKKEEEENNNNN')
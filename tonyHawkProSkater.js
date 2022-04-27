//Create a Tony Hawk Pro Skater constructor 
// that makes fighting game characters with 4 properties and 3 methods

function MakeFGCharacters ( gameBrand, gameModel, gameWireless, gameColor){
    this.brand = gameBrand
    this.model = gameModel
    this.wireless = gameWireless
    this.color = gameColor

}

let babyGameCharacter = new MakeFGCharacters('Marvel Studios', 'African Male', true , 'purple')

//Leon's version

function TonyHawkCharacter (chName, chStance, chSponsor, chMove){
    this.characterName = chName
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove

    this.flip = function (){
        console.log ('KICK FLIP!')
    }

    this.taunt = function (){
        console.log ("Don't make me use my ${this.specialMove}")
    }

    this.grab = function (){
        console.log ("MELON GRABBBBB")
    }

}
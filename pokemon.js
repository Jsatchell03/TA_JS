// Your code here!

class Pokemon {
    constructor(name, attack, defense, health, type) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.health = health
        this.type = type
        this.fullHealth = health
    }
    takeDamage(damage){
        if (damage >= this.health) {
            this.health = 0
        } else{
            this.health -= damage
        }
    }
    attackOpponent(opponent){
        if(opponent.defense >= this.attack){
            opponent.takeDamage(1)
        } else{
            opponent.takeDamage(this.attack - opponent.defense)
        }
    }
    display(){
        return(this.name.toUpperCase() + ` (${this.type.toUpperCase()}) ` + `${this.health}/${this.fullHealth}` )
    }
}

const charmander = new Pokemon("charmander", 12, 8, 30, "fire")
const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison")
const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");

// Don't edit this line!
module.exports = Pokemon;

class Animal {
    name: string
    species: string
    sound: string

    constructor(name:string, species:string, sound:string){
        this.name = name
        this.species = species
        this.sound = sound
    }

    makeSound(){
        console.log('the animal is makeing sound')
    }
}


const dog = new Animal('Dogesh bhai', 'dog', 'gheu gheu');

const cat = new Animal('puci', 'cat', 'meu meu')


console.log(dog.name)
console.log(cat.sound)
// console.log(cat.makeSound)\

cat.makeSound();

// function add (num1 : number, num2:number) {

// }

// add (2,3)
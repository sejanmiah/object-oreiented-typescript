class Animal {
    name: string
    species: string
    sound: string

    constructor(name:string, species:string, sound:string){
        this.name = name
        this.species = species
        this.sound = sound
    }
}


const dog = new Animal('Dogesh bhai', 'dog', 'gheu gheu')


console.log(dog.name)

// function add (num1 : number, num2:number) {

// }

// add (2,3)
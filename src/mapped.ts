// Mapped Types

// map

const arrayOfNumber : number[]  = [1,2,3];
const arrayOfString : string[]  = ["1","2","3"];


const arrayOfStringUsignMap: string[] = arrayOfNumber.map((num) =>  num.toString() );

console.log(arrayOfStringUsignMap);

const user = {
    id: 222
}

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum["height"]

// type AreaOfString = {
//     height: string;
//     width: string;
// }

type AreaOfString = {
    [key in "height" | "width"]: string
}


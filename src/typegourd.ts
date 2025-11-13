// type Gurd

const add = (num1: number | string, num2: number | string) => {

    // Here is gurd 
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        
        return num1 + num2;
    }
    else{
        num1.toString() + num2.toString();
    }
}

add(2,2); //4
add(2,'2') // 22
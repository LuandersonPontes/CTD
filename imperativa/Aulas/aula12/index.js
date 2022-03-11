// Aula 12 - Inverter Array 

let meuArray = [0,1,2,3];
// inverter array - [3,2,1,0]
let meuArray2 = [4,5,6,7];
// inverter array - [7,6,5,4]

function inverterArray (array){
    let novoArray = [];
    novoArray.push(array.pop());
    novoArray.push(array.pop());
    novoArray.push(array.pop());
    novoArray.push(array.pop());

 // novoArray = []
 // array = [0,1,2]- novo array [3];
 // array = [0,1]- novo array [3,2];
 // array = [0]- novo array [3,2,1];
 // array = []- novo array [3,2,1,0];

    return novoArray;

}
// console.log() para aparecer meuArray no terminal 
console.log(meuArray);
// console.log(()) para meuArray lá em cima
console.log(inverterArray(meuArray));
// console.log(()) para meuArray2 lá em cima 
console.log(inverterArray(meuArray2));
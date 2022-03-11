//indexados a partir do 0
//tamanho do array -1
//array com o mesmo tipo de informação
let numeros = [1,2,3,4,5,6];
//array com diferentes tipos de informações
let numeros1 = [1,"Luan",true];
//acessar elementos específicos de um array

numeros[0];
numeros[1];
numeros[2];
//..//
//Forma de chamar o último elemento do array de forma dinamica
console.log(numeros[numeros.length - 1]);
//Forma de chamar qualquer elementos de um array 
console.log(numeros[numeros [1]]);


//modificar elementos de uma array 
let alfabeto = ["a","b","c","z"];

alfabeto [0] = "A";
alfabeto [1] = "B";
alfabeto [3] = "D";
//...//
console.log(alfabeto);


//adicionar elementos a um array
// adiciona ao final de uma array
alfabeto.push("E");
console.log(alfabeto)
// adiciona no começo de uma array 
alfabeto.unshift("u");
console.log(alfabeto);

if(alfabeto[0] = "u"){
    console.log("Primeira posição do alfabeto esta correta")
}

//Extrair elementos de uma array

//Remove o último elemento de uma array
alfabeto.pop();
//Remove o primeiro elemento de uma array
alfabeto.shift();


 //comparar elementos de um array com os elementos de otro.
 //                 0 1 2
const pontuacaoA = [5,6,7];
const pontuacaoB = [7,3,10];

if(pontuacaoA [0] > pontuacaoB[0]){
    console.log("na primeira rodada jogador A venceu")
} else {
    console.log("na primeira rodada o jogador B venceu")
}

if(pontuacaoA [1] > pontuacaoB[1]){
    console.log("na primeira rodada jogador A venceu")
} else {
    console.log("na primeira rodada o jogador B venceu")
}

if(pontuacaoA [2] > pontuacaoB[2]){
    console.log("na primeira rodada jogador A venceu")
} else {
    console.log("na primeira rodada o jogador B venceu")
}
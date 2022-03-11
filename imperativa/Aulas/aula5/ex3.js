
//IMC
 
let nome = "Ana";
let sobrenome = "Paula";
let idade = 26
let peso = 55.0;
let altura = 1.62;
let plano = true;  

let IMC = peso/altura**2; 

console.log(nome + " " + sobrenome + " tem " + idade + " anos e seu índice de massa corporal é de: " + IMC.toFixed(2))
 

//Declração de função
//Nos () colocamos os parametros que podem ser opcionias,
//e infinitos
//podendo passar quantos parametros eu quiser
// 0 ... n
 function minhafuncao() {
    //Escopo da função
    //Bloco de código a ser executado
    console.log("Olá, seu nome é: " + nome);
 }


 //Chamada ou inovação da função
 minhafuncao("luan")


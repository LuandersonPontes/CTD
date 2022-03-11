// Calculadora Nível 1

//Função adicionar
function adicionar (a, b) {
    var adicionar = a + b;
    return adicionar;
}
    var adicionarUm = adicionar(2, 5)
    console.log(adicionarUm)
  
//Função subtração    
function subtração (a, b) {
    var subtração = a - b;
    return subtração;
    }
    var subtração1 = subtração(10, 5);
    console.log(subtração1)

//Função multiplicação
function multiplicação(a, b) {
    var multiplicação = a * b;
    return multiplicação;  
}
    var multiplicaçãoUm = multiplicação(5, 5);
    console.log(multiplicaçãoUm)

//Funcão divisão 
function divisão(a, b) {
    var divisão = a / b;
    return divisão;
}
    var divisãoUm = divisão(20, 2);
    console.log(divisãoUm)

// Calculadora - Nível 2
console.log("---Teste de Operações/calculador---")

console.log(adicionarUm,subtração1);
console.log(multiplicaçãoUm);
console.log(divisãoUm);
console.log(divisãoUm);


// Calculadora - Nível 3
function quadradaDoNumero(a) {
    var quadradaDoNumero = a**2;
    return quadradaDoNumero;
}
    var quadradaDoNumero = quadradaDoNumero (3);
    console.log(quadradaDoNumero);
//
function mediaDeTresNumeros(a, b, c) {
    var mediaDeTresNumeros = (a + b) * c;
    return mediaDeTresNumeros;
}
    var mediaDeTresNumeros = mediaDeTresNumeros(2, 3, 2);
    console.log(mediaDeTresNumeros);
//
function calculaPorcentagem (valor,percentual) {
    return divisão(multiplicação(valor,percentual),100);
}
function geradorDePorcentagem(num1,num2){
   return multiplicação(divisão(num1/num2)*100);
}
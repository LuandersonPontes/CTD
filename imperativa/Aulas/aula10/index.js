// AULA 10 - Strings e Arrays
//\n - quebra de linha
const mensagem = "Olá mundo"
let buscar = "o"

mensagem.toLowerCase();

if(buscar.toLowerCase () == mensagem.toLowerCase ()){
    //Achou um o
};

//Buscar apenas as letras minuscula
busca.toLowerCase();


console.log(mensagem.length);
//  Propriedade do tipo String que Realiza a contagem de caracteres
mensagem.length


//Métodos - São funções que vão realizar alguma ação ba seu variavel ou objeto


//replace - Substitui
let novaMensagem = mensagem.replace("Olá", "Hello");
console.log(novaMensagem);


mensagem.toUpperCase();
//toUpperCase - Coverte a mensagem original para maiscula
console.log(mensagem.toUpperCase());
//toLowercase - Coverte a mensagem original para minusculas
console.log(mensagem.toLowerCase());




//Exemplo 1: mensagem.length
const senha = "1983455678";

if(senha.length < 4){
    console.log("Senha Inválida");
}else {
    logar();
}

function logar(){

}
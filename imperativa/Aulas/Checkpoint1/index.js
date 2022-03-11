// Luanderson silva// 
// Checkpoint 1, Programção Imperativa//

console.log(`
                --Bem vindo ao menu Fast--
                 Selecione a opção abaixo

      1- Pipoca     -- 10 segundos a ser feito(padrão)
      2- Macarrão   -- 08 segundos a ser feito(padrão)
      3- Carne      -- 15 segundos a ser feito(padrão)
      4- Feijão     -- 12 segundos a ser feito(padrão)
      5- Brigadeiro -- 08 segundos a ser feito(padrão)
`)

let opcao = 0

function microondas (opcao, tempo){
    let tpadrao = 0;
    let comida = "";
    
    switch(opcao) {
      case 1:
        tpadrao  = 10
        comida = "pipoca"
        break;
      case 2:
        tpadrao  = 08
        comida = "macarrao"
        break;
      case 3:
        tpadrao= 15
        comida = "carne"
        break;
      case 4:
        tpadrao = 12
        comida = "feijao"
        break;
      case 5:
        tpadrao = 08
        comida = "brigadeiro"
        break;
      default:
        return console.log("Prato inexistente")

    }
    if(tempo >= 2 * tpadrao && tempo < 3 * tpadrao){
      console.log("Comida queimou")
    }else if (tempo < tpadrao){
      console.log("Tempo insuficiente")
    }else if (tempo >= 3* tpadrao){
      console.log("Morte na certa")
    }else if(tempo >= tpadrao && tempo < 2* tpadrao){
      console.log("Prato feito, Bom apetite!!!")
    }
}
microondas (5,07)  // TESTES //
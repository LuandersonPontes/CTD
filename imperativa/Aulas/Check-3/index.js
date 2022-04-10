// Luanderson de Pontes Silva, Checkpoint - 3 

// 1 - função construtora Criando um objeto.
function Aluno (nome, faltas, notas) {
   this.nome = nome,
   this.faltas = faltas,
   this.notas = notas,

   // 2 - Metodo Calcular média de alunos
   this.mediaAluno = function () {
      let soma = 0;
      for(let i = 0; i < this.notas.length; i++) {
         soma = soma + this.notas[i];
      }
      return soma / this.notas.length;
   }
   
   // 2 - Metódo calcular Faltas adicionando 1
   this.faltasAluno = function() {
      let faltas = 0;
      faltas = this.faltas + 1;
      return faltas;
   }
}
// Criação de alunos !!
const aluno1 = new Aluno('Marcos', 5, [7, 8, 9]);
const aluno2 = new Aluno('kaina', 0, [0, 5, 8]);
const aluno3 = new Aluno('Jessica', 6, [6, 5, 10]);

console.log(aluno1, aluno2, aluno3);

// 3 - Criando um objeto de forma literal
let cursos = {
   curso: "Front-End",
   notaAprovacao: 7,
   faltasMaxima: 4,
   estudantes: [],
  
   // 4 - Criando metódo para adicionar aluno
   adicionarAluno: function (nome, faltas, notas) {
      let aluno = new Aluno (nome, faltas, notas)
      this.estudantes.push(aluno);
  }
   // 5 - Criando um metódo para aprovação de aluno
  

   // 6 - Criando metódo para percorrer um array de boleanos   
}

// Calculo Media de aluno !!
console.log('Aluno 1 tirou na media a nota =',aluno1.mediaAluno(7,8,9));
console.log('Aluno 3 tirou na media a nota =',aluno3.mediaAluno(6,5,10));

// Calculo de Faltas do aluno !!
console.log('Aluno 2 teve faltas =',aluno2.faltasAluno(0)); 
console.log('Aluno 3 teve faltas =',aluno3.faltasAluno(6));

// Adicionar aluno
cursos.adicionarAluno('luanderson', 3, [8, 8, 8]);
console.log(cursos.estudantes);

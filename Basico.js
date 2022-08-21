
//imprindo texto / Sentenças

console.log("imprimindo texto1");
console.log("imprimindo texto2");
console.log("imprimindo texto3");

console.log("Muito");
console.log(
    "Legal");
console.log
("Mesmo");

// Blocos são formados por chaves { }

{
        console.log('Bloco 1');
    {
        console.log('Bloco 2');
        {
            console.log('3');
        }
    }
}


// atribuindo váriaveis e usando em operações aritméticas

var nome = "CANETA"
var quantidade = 10;
var preco = 6.4;
let imposto = 1.5;
let precoFinal = preco + imposto;
 //OBS: Pode usar tanto VAR quanto LET para declarar variaveis


console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);


// Operações numéricas

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// concatenando items ( juntando textos com váriaveis)
let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria
+ ", Preço: " + preco + ", Desconto: " + desconto);

// verificando types 
let idade = 31
console.log(typeof 31);
console.log(typeof idade);
// Numbers
let salario = 4578.32;
console.log(typeof salario);

// Verdadeiro ou falso - Boolean

let estaChovendo = true //ou false
console.log(typeof estaChovendo);

// String
console.log(typeof "Teste");


// alterando váriaveis

let a = 3;

a = a + 10;

console.log(a); // recebeu outro valor

// Transformando váriavel em constante (utiliza-se const)

const a = 3

// TIPAGEM 

let qualquer = 'Daniel'

console.log(qualquer)
console.log(typeof qualquer) // Informando o tipo da variável

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer) // Number





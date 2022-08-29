
// Operadores Binários

const [a, b, c, d] = [3, 5, 1, 15]
//sempre dois operando. (a+b resultado + c, resultado + d)

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)

// Operadores Relacionais
/* sempre o resultado será verdadeiro ou falso */

console.log('01)', '1' == 1) //True
console.log('02)', '1' === 1) // false porque um é string outro number
console.log('03)', '3' != 3)
console.log('03)', '3' !== 3)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 ==d2)
console.log('11'), d1.getTime() === d2

// é bom usar estritamente igual ( ===).


// Operadores Lógicos

// todos operandos tem que ser verdadeiros para ser TRUE


//  || = ou / && = E
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

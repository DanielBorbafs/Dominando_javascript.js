const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Descobrindo se é um inteiro


const avaliacao1 = 9.875
const avaliacao2 = 10.756

const total = avaliacao1 * peso1 + avaliacao2 + peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Usando apenas duas casas decimais
console.log(media.toString(2)) // Convertendo o valor em binario
console.log(typeof media)
console.log(typeof Number)

// CUIDADOS A SE TRABALHAR COM NÚMEROS .


console.log(7 / 0 ) // número infinito
console.log("10" / 2 ) // Dividindo string..
console.log("Show!" * 10) // NaN
console.log(0.1 + 0.7) // Imprecisão de resultados.


// MATH

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) // power = potencia.. (elevao do ao quadrado)
console.log(area.toFixed(2))

// Meu exemplo

const eleva = 4
const resultado = Math.pow(eleva, 2)
console.log(resultado)

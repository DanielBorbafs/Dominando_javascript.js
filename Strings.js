const escola = 'Cod3r'

console.log(escola.charAt(4)) // Imprime a letra do quarto indice da palavra
console.log(escola.charAt(5)) // retorna valor vazio (não da erro)
console.log(escola.charCodeAt(3)) // tabela unicode
console.log(escola.indexOf('3')) // Inverso da de cima

console.log(escola.substring(1)) // Vai imprimir do indice 1 para frente
console.log(escola.substring(0, 3)) // vai do indice 0 até o indice 3 sem incluir o 3

console.log('Escola'.concat(escola).concat("!")) // Juntando varios dados / Pode usar o + também no lugar de concat
console.log(escola.replace(3, 'e')) // Substituindo caracteres

console.log('Ana,Maria,Pedro'.split(',')) // Gerando array com 3 elementos independentes separados por ','

// TEMPLATE STRING
const nome = 'Daniel'

const concatenacao = 'Olá ' +  nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)


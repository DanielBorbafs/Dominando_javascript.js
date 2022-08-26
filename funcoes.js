console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)

}
imprimirSoma(2, 3)


// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,30))
console.log(soma(2))
console.log()


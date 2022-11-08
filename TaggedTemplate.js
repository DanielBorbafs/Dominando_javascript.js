// Tagged Template 

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'

}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)


// Tagged Template 2

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real`1 x de ${preco} ou 3x ${precoParcela}.`)

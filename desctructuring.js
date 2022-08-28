// Tirar elementos de objetos, arrays.. extrair ... desestruturar...


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
        cep: 5859784
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)
 // ou
 const {nome: n, idade: i } = pessoa
 console.log(n, i)

 const {endereco: { logradouro, numero, cep }} = pessoa
 console.log(logradouro, numero, cep)
 const {endereco: { logradouro: l, numero: nm, cep: c}} = pessoa
 console.log(l, nm, c)

//////////////////////////////////////

 const [a] = [10]
console.log(a)

const[n1, n3, , n5, n6 = 0] = [10, 7, 8, 9]
console.log(n1, n3, n5, n6)

//array dentro de array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

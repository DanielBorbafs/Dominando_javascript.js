//OBJETOS CONSTANTES

//123
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


//pessoa => 456 - {...}
//pessoa = { nome:  'Ana'} //CONST  só é atribuida em 123 pois ela não muda, a atribuição é feita apenas uma vez

Object.freeze(pessoa) // após essa função o objeto é congeldo e não conseguimos fazer alterações nenhuma
pessoa.end = 'Rua ABC'
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze ({nome:'Joao'})
console.log(pessoaConstante)

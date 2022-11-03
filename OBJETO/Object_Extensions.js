//Object.preventExtensions = Nao consegue adicionar novos atributos do objeto. (Pode excluir, só não pode adicionar)

const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível', Object.isExtensible(produto)) // testando para ver se o objeto é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
console.log(pessoa)

//Object.freeze = selado + valores constantes

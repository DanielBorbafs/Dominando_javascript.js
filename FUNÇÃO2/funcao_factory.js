// Factory Simples

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
  
}

console.log(criarPessoa())

// Factory melhorada

function criarProduto(nome , preco) {
  return {
      nome,
      preco,
      desconto: 0.1
  }
  
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 199.49))

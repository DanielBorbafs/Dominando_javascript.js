// Rest/Spread

// Usar rest com parâmetro de função

//usar spread com Objeto

const funcionario = { nome: 'Maria', salario: 12250.80}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// Usar spread com Array
const GrupoA = ['Joao', 'Pedro', 'Amanda']
const GrupoFinal = ['Maria', 'Marcos', ...GrupoA, 'Daniel']
console.log(GrupoFinal)

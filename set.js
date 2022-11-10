

//set
// nao aceita repetição indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Palmeiras').add('Ceara')
times.add('Vasco') // n repete

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete ('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lara', 'Amanda']
const nomeSet = new Set(nomes)
console.log(nomeSet)

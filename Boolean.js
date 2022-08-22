
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //  uma ! inverte a lógica... duas !! passa a ser o primeiro resultado

console.log('Os verdadeiros ....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // pegando uma atribuição


console.log('os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log(!!('' || null || 0 || ' ' ))

let nome = ''
console.log(nome || 'Desconhecido')





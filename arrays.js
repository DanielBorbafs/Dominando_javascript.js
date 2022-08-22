const valores = [7.7, 8.9, 6.3, 9.2] // array
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // adcionando elemento no array
console.log(valores) 
console.log(valores.length) // informa quantos elementos tem no array

valores.push(100) // adicionando elemento
console.log(valores)

console.log(valores.pop()) // retirando ultimo elemento do array
delete valores [0] // Apagando item no indice 0
console.log(valores)

// entendendo this

console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logthis() {
        console.log('Dentro de uma fução....')
        console.log(this === exports)
        console.log(this === module.exports)
        console.log(this === global)
}

// this fora de um modo aponta para exports
// this dentro de uma função recebe como global

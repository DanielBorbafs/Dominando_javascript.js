let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

// Criando uma variavel maluca: sem vaar e let 
abc = 3 // ERRADO
console.log(global.abc)

module.exports = { e: 456, f: false, g:'teste'}

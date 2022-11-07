const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const moduloA = require ('C:\Users\conta\OneDrive\Desktop\CODE\Landing pages\#2\api.vagalume.config.js')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomdia)
console.log(moduloB.boaNoite())
console.log(moduloB)



module.exports = {
  ola: 'Bom dia Pessoal!'
}
const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)
  



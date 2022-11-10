// Promises

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve => reject => {
        setTimeout(() = {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))


const http = require('http')

 // sem promisses
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        
        res.on('data', dados => {
            resultado += dados
        })
        
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })     
    })
}

let nomess = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: {a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(anlunos.map(a => ´´`´´)
    }´...................................... 
}

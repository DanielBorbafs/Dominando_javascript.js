const notas = [ 7.7, 6.2, 8.0, 3.6, 7.8, 9.0]

//semcallback

let notasBaixas = []
for (let i in notas) {
    if (notas [i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas2)

//comcallback

notasBaixas = notas.filter(function (nota) {
    return nota < 7
  
})
console.log(notasBaixas2)
const notasBaixas3 = notas.filter(nota => nota < 7 )
console.log(notasBaixas3)
const NotasMenorQue7 = nota => nota < 7

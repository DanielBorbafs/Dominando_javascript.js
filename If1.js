function soBoanoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }

}
soBoanoticia(8.1)
soBoanoticia(6.1)

// se o valor for maior que 7 ele imprime o console log

function seForVerdadeEufalo(valor) {
    if(valor){
        console.log('é Verdade....' + valor)
    }


}

seForVerdadeEufalo()
seForVerdadeEufalo(null)
seForVerdadeEufalo(undefined)
seForVerdadeEufalo(NaN)
seForVerdadeEufalo('')
seForVerdadeEufalo(0)
seForVerdadeEufalo(-1)
seForVerdadeEufalo(' ')
seForVerdadeEufalo([])
seForVerdadeEufalo('?')


// node faz cache

module.exports = {
        valor: 1,
        inc() {
                this.valor++
        }


} 

module.exports = () => {
        return {
                valor: 1,


        }



}


const contadorA = require('./instanciaUnica')
const contadorB = require ('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

const pessoa = {
    saudacao: 'BOM DIA!', 
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falardepessoa = pessoa.falar.bind(pessoa)
falardePessoa()


function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    } /*.bind(this)*/, 1000)

}

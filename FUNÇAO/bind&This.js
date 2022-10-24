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

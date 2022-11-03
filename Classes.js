class Lancamento {
    constructor(nome = 'Genérico', valor = 0 ) {
        this.nome = nome
        this.valor = valor   
    }
}

class CicloFinanceiro {
    constructor(mes, ano ) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addlancamentos(...lancamentos) {
        lancamentos.forEach( l => this.lancamentos.push(l))
    }

    sumario () {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado


    }

}
const salario = new Lancamento ('Salario', 1000)
const contaDeluz = new Lancamento ('Luz', 980)
const contas  = new CicloFinanceiro (6, 2018)
contas.addlancamentos(salario, contaDeluz)
console.log(contas.sumario())

//Herança em Classes
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super (sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')

    }

}
const filho = new Filho
console.log(filho)



// usando a notação literal

const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras 
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao factory

function CriarFuncionario(nome, salarioBase, Faltas) {
    return {
        nome, 
        salarioBase,
        Faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - Faltas)
        }


    }    
}


const f1 = CriarFuncionario('joão', 1321, 5)
console.log(f1.getSalario())

//OBJECT.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// função famosa que retorna objeto..

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)


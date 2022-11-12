// NUllish coalescing Operator
const idade = 0;
const idadeB= 'Sua idade é: '  + (idade || 'Não informado');
//PROBLEMA Valor 0 + string vazia + undefined = false
console.log(idadeB)

// NUllish coalescing Operator
const idadeC = 0;
const idadeD= 'Sua idade é: '  + (idade ?? 'Não informado');
//PROBLEMA Corrigido com '??'
console.log(idadeD)


//OBJETOS

const user = {
    name: 'Diego',
    idade: 27,
    address: {
        street: 'Rua teste',
        number: 176,
    },

};
// Métodos em objetos
const MetodoIN = ('name' in user) // Existe a atribuição NAME no objeto USER? = TRUE
console.log(MetodoIN)

const getkeys = Object.keys(user) // imprime todas chaves do objeto 
console.log(getkeys)

const getvalues = Object.values(user)
console.log(getvalues)// imprime todos valores do objeto

const getjson = JSON.stringify(Object.values(user)) // imprime o objeto em forma mais clara
console.log = getjson

const teste = JSON.stringify(Object.entries(user)) // imprime o objeto em chaves e valores separados por vetores
console.log = teste

// Desestruturação
// remover parte do objeto para uma variável a parte


const {address, idade: age , nickname = 'Daniel' } = user.address // alterando dados do objeto pelas keys
console.log = JSON.stringify(address, age, nickname)

// com função
function mostraIdade(user) {
    return user.age;
}
console.log = (mostraIdade)

//rest Operator
// retira o resto da linha que sobrar do objeto exemplo: NAME = Daniel, vai remover o NAME e deixar 'Daniel'
const resto = { name, ...rest } = user;
console.log = Json.stringify(resto)

const array = [ 1, 2, 3, 4, 5, 6];
//const first = array [0] // buscando elemento 1
//const second = array[1] // buscando elemento 2
// outra forma
const [first, second,... rest] = array;
console.log = JSON.stringify({first, second, rest}) // vai imprimir o first e  second, e depois o resto tudo junto na mesma key

// Short syntax

const nome = 'Daniel'
const idad = 22;

const usuario = {
    nome, //nome: nome, // encurtando o objeto/variavel
    idade,  //idade: idade,
};

const Membro = {
    name: 'Daniel',
    idade: 222,
    address: {
        street: 'Rua teste',
        number: 161,
        zip: {
            code : 29675925,
            city: 'JurassycWord'
        },
        showFullAddress () {
            return 'ok';
        }
    },
};

console.log =  user.address.street //imprime o dado normalmente
// caso eu comente o address, irá gerar um erro. agora segue a linha para imprimir o erro no console

console.log = user.address ? user.address.street: 'Não informado' // verifica se existe o endereço, se existir mostra o street. se não mostra Nao informado.

console.log = user.address
? user.address.zip
    ? user.address.zip.code
    : 'Não informado'
:   'Não informado' // confere se existe adress, se em adress existe zip, se exisitir, procurar code, se não.. imprimir 'nao informado'
// FUNÇÃO COMPLEXA E NADA CONVENCIONAL

// melhorada
console.log = user.address?.zip?.code ?? 'Não Informado';

console.log = user.address.showFullAddress?.() // execute se a função existir

const key = 'name';
console.log = user[key] //imprimindo propriedade do objeto name

const key2 = 'street';
console.log = user.address[key]

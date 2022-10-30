//Herança 1 prototype

const ferrari = {
    modelo: 'f40',
    veMax: 324
}

const volvo = {
    modelo: 'v40',
    veMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

// Herança2

// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
// Procura no filho, se não achar procura no pai, se não achar procura no avo. se nao achar puxa o OBJECT PROTOTYPE
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 600,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta    
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari2 = {
    modelo: 'f40',
    veMax: 324
}

const volvo2 = {
    modelo: 'v40',
    status(){
        return`${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(100)
console.log(volvo.status())

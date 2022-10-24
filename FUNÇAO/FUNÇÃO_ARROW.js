let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    retrun 2 * a
  
}
  
dobro = a => 2* a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())

**********************************************
function Pessoa() {
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    
    }, 1000}
    
}

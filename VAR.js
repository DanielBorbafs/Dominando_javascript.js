{
    {
        {
            {var sera = 'Sera???'}
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)  //error
// variaveis dentro de função não é visivel fora


/*
* Não devemos declarar var em níveis globais pois pode gerar problemas;
* Devemos criar dentro de funções ;
*/

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)

}
console.log('fora =', numero)


var numero = 1
{
    let numero = 2
    console. log('dentro = ', numero) 
/* var e let recebem o mesmo nome de váriaveis, 
* porém os resultados sao diferentes
* pois var está fora do escopo e let está dentro.
*/

}
console.log('fora=', numero)

// VAR  EM LOOP

for (var i = 0; i < 10; i++) {
    console.log(i)
// vai contar até 9
}

console.log('i=', i) 
/* Vai imprimir 10,
* por que foi o valor que fez o resultado sair do laço
*/

// LET EM LOOP

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i=', i)
// LET da erro quando tentamos imprimir fora do laço

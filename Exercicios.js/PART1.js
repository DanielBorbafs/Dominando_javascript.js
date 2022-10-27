// Crie uma função de dois valores passados como parâmetros e mostre no console a soma, subtração e multiplicação

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(10, 5)



/* CLASSIFIQUE OS TRIÃNGULOS
3 lados iguais = Equilátero
2 lados iguais = Isósceles
todos lados diferentes: Escaleno
*/


function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}
console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));


// crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function expoente (base, expoente) {

    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

/*Tenemos dos números, un numerador y un denominador. 
Si el denominador no es cero, mostramos el resultado de dividir 
el numerador por el denominador. Si el denominador es cero, 
mostramos el mensaje "No se puede dividir por cero".*/


let numerador = window.prompt ('Escribe un numero');

let numdenominador = window.prompt ('Escribe otro numero');

if (numerador != 0) {
    console.log (numerador/numdenominador);
}
else (numerador = 0 ); 
{
console.log ('No se puede dividir por cero')
}
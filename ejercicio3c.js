/*Escribe un programa que pida al usuario 3 números. 
Si el resultado de la suma de los dos primeros es igual al tercer número, 
mostrarlo en pantalla, si no mostrar que el tercero no es la suma de los dos anteriores.*/

numString1 = window.prompt ('Escribe el primer número');
numString2 = window.prompt ('Escribe el segundo número');
numString3 = window.prompt ('Escribe el primer número');

let num1 = parseInt (numString1);
let num2 = parseInt (numString2);

if ( num1+num2 == numString3)
{
    window.alert (numString3);
}
else {
    window.alert ('el tercer numero no es la suma de los dos anteriores')
}

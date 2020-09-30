/*Mostrar el mayor de tres valores*/


let num1 = window.prompt('Escribe un valor');
let num2 = window.prompt('Escribe otro valor');
let num3 = window.prompt('Escribe otro valor');


if (num1 > num2 && num1 > num3) {
    window.alert (num1);
}
else if (num2 > num1 && num2 > num3)
{
    window.alert (num2);
}
else if (num3 > num2 && num3 > num1 ) {
    window.alert (num3);
}
else if (num1 === num2 && num1 === num3 ) {
    window.alert ('Son todos iguales');
};

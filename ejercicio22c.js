/*Mostrar el menor de tres valores */


let num4 = window.prompt('Escribe un valor');
let num5 = window.prompt('Escribe otro valor');
let num6 = window.prompt('Escribe otro valor');


if (num4 < num5 && num4 < num6) {
    window.alert (num4);
}
else if (num5 < num4 && num5 < num6)
{
    window.alert (num5);
}
else if (num6 < num4 && num6 < num5 ) {
    window.alert (num6);
}
else if (num4 === num5 && num4 === num6 ) {
    window.alert ('Son todos iguales');
};
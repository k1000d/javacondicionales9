/*Resultado de carrera. Hacer varios programas en los que se le pregunta al usuario 
el puesto en el que acabó. Después:

Si el valor de puesto es 1 mostramos mensaje con "Ganaste", si no "Lo importante es participar”.

Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", 
si el valor de puesto es 2, mostramos el mensaje con "Medalla de plata", 
si es 3 "Medalla de bronce" y al resto "Lo importante es participar.

Con switch: Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", 
si el valor de puesto es 2, mostramos el mensaje con "Medalla de plata", 
si es 3 "Medalla de bronce" y al resto "Lo importante es participar.

Los puestos 1, 2 y 3 ven el mensaje "Sube al podium", 
el resto ven el mensaje "Se acabó la carrera". Hazlo usando un if/else.*/

let num1 = parseInt(window.prompt('¿En que puesto has acabado?'));
let num2 = parseInt(window.prompt('¿En que puesto has acabado?'));
let num3 = parseInt(window.prompt('¿En que puesto has acabado?'));

if (num1 === 1) {
    window.alert ('Ganaste');
}else {
    window.alert ('Lo importante es participar');
};

if (num2 === 1) {
    window.alert ('medalla de oro');
}
else if (num2 === 2) {
    window.alert ('medalla de plata');
}
else if (num2 === 3) {
    window.alert('Medalla de bronce');
}
else if (num2) {
    window.alert ('Lo importante es participar');
}

switch (num3) {
    case 1:
    window.alert ('Medalla de oro');
    break;
    case 2:
    window.alert ('Medalla de plata');
    break;
    case 3: 
    window.alert ('Medalla de bronce');
    break;
    default:
    window.alert ('Lo importante es participar');
    break;
}


if (num1 = 1, 2, 3)
 {
     window.alert('Sube al podium')

}
else
{
    window.alert ('Se acabo la carrera')
};









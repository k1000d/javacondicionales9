/*Pide al usuario que escriba un día de la semana
 (lunes, martes…). Mostrar en pantalla el día que dice que es si es entre 
 lunes y viernes (Por ejemplo "Hoy es lunes") y si es fin de semana mostrar 
 "Es fin de semana". Hazlo una vez usando switch y otra con if else.*/

 let nombre = window.prompt ('Escribe un día de la semana');

 


switch (nombre) {
case "lunes": 
window.alert ('hoy es lunes');
break;
case "martes": 
window.alert ('Hoy es martes');
break;
case "miecoles":
window.alert ('Hoy es miercoles');
break;
case "jueves": 
window.alert ('Hoy es jueves');
break;
case "viernes": 
window.alert ('Hoy es viernes');
break;
case "sabado": 
window.alert ('Es fin de semana');
break;
case "domingo":
window.alert ('Es fin de semana');
break;
};

/*

if (nombre === "lunes") {
    window.alert ('Hoy es lunes');
}
if (nombre === "martes") {
    window.alert ('Hoy es martes')
}
if (nombre === "miercoles") {
    window.alert ('Hoy es miercoles')
}
if (nombre === "jueves") {
    window.alert ('Hoy es jueves')
}
if (nombre === "viernes") {
    window.alert ('Hoy es viernes')
};
 if (nombre === "sabado") {
     window.alert ('Es fin de semana');
 }
 if (nombre === "domingo") {
    window.alert ('Es fin de semana');
}
*/
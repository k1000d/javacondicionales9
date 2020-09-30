/*Decir el número de helados que queremos comprar. 
Cada helado vale 2 euros. 
Si compramos más de 10 helados, nos regalan uno. 
Mostrar en pantalla el número de helados que nos dan 
y cuánto hemos pagado por ellos. 
(Sólo damos un helado gratuito aunque compren muchos más helados que 10)*/


let helado1 = parseInt(window.prompt('¿Cuantos helados quereis comprar?'));
let helado = 2 


if (helado1 > 10) {
    window.alert (helado*(helado1+1));
}
else (helado1*helado) 
{
    window.alert(helado1*helado);
}


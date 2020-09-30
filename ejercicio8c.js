/*Escribe un programa que pida dos números al usuario.
 Después muestra un mensaje que dice cómo se relacionan entre los dos. 
 Por ejemplo si escribe 5 y 7 , muestra "5 es menor que 7".*/


 let numstring = parseInt (window.prompt('Escribe un numero'));
 let numstring1 = parseInt (window.prompt('Escribe otro numero'));

if (numstring < numstring1) {
    console.log (`${numstring} es menor que ${numstring1}`);
};


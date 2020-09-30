/*En una clase tienes tres exámenes, 
con un valor de 5 puntos máximo en cada uno.
 La nota final es la mejor nota de los dos primeros exámenes más la nota del tercer examen. 
 Crea un programa que con tres notas calcula el resultado de nota final 
 con los siguientes rangos:
                10 es matrícula
                9 y hasta 10 es sobresaliente
                7 y hasta 9 es notable
                6 y hasta 7 es bien
                5 y hasta 6 es suficiente
                0 hasta 5 es suspenso

Ejercicio correción clase*/


let nota1 = parseInt(window.prompt("Escribe la nota del primer examen"));
let nota2 = parseInt(window.prompt("Escribe la nota del segundo examen"));
let nota3 = parseInt(window.prompt("Escribe la nota del tercer examen"));

let suma;

if (nota1 > nota2) {
  suma = nota1 + nota3;
} else {
  suma = nota2 + nota3;
}

if (suma < 5) {
  console.log(`La nota es ${suma}. Has suspendo`);

} else if (suma < 6) {
  console.log(`La nota es ${suma}. Es un Suficiente`);

} else if (suma < 7) {
  console.log(`La nota es ${suma}. Bien`);

} else if (suma < 9) {
  console.log(`La nota es ${suma}.  Notable`);

} else if (suma < 10) {
  console.log(`La nota es ${suma}.  Sobresaliente`);

} else {
  console.log(`La nota es ${suma}. Matricula`);
};
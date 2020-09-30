/*Escribe un programa que dada una frase sacará su carácter central. Nota:
Si la largura de la frase es par deberá sacar los dos caracteres centrales correspondientes. 
Si es impar deberá sacar su único carácter central. 
*/

let frase = 'No leemos codigo, no los vemos, porque todo algoritmo esconde un nombre sin tiempo, lugar y espacio'
;

if (frase.length % 2 === 0) 
{
  console.log(frase.substring(frase.length / 2 - 1, frase.length / 2 + 1));
} else {
  
  console.log(frase.substring(frase.length / 2, frase.length / 2 + 1));
}
/*Pide por teclado la edad del usuario. 
Si la edad es igual o inferior a 8 mostramos el mensaje "Pasa al tobogán", 
si no mostramos "Eres demasiado mayor para usar el tobogán".*/

edad = window.prompt ('edad de usuario')
if (edad <= 8) {
    window.alert ('Pasa el tobogán')
}
else {
    window.alert ('Eres demasiado mayor para usar el tobogán')
};

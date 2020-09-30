/*Un programa que te pregunta la temperatura que hace donde estás y 
te sugiere qué hacer dependiendo de ella. Las recomendaciones son:

Si hace más de 40 grados, vete a otro sitio
Entre 30 y 40 grados, enciende el aire acondicionado
Entre 30 y 20 grados, no hagas nada
Entre 10 y 20 grados, enciende la calefacción
Si hace menos de 10 grados, vete a otro sitio 
*/

let temperatura = parseInt(window.prompt('¿Que temperatura hace?'));


if (temperatura>40)
{
    window.alert ('Vete a otro sitio');
} else if (temperatura > 30 && temperatura < 40) 
{
    window.alert ('enciende el aire acondicionado');
} else if (temperatura > 20 && temperatura < 30) 
{
    window.alert ('No hagas nada');
} else if (temperatura > 10 && temperatura < 20)

{
    window.alert ('enciende la calefacción');
} else if (temperatura < 10) 
{
    window.alert ('Vete a otro sitio');
};
     

 



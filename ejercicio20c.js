/* Con if else if: Mostrar en pantalla un menú con varias opciones. 
Dependiendo de lo que el usuario elija, mostrar en pantalla la selección. 
Hacerlo tanto con if else como con switch.*/
let menu2;
let menu = window.prompt (`

1-comida 
2-bebida
3-postre

`)
.toLowerCase();



if(menu === 'comida') {

        menu2 = window.prompt (
        `1-pasta con salsa
         2-pescado frito
         3-hammburguesa
        `
    );

} else if ( menu === 'bebida') {
    menu2 = window.prompt (
        `1- cocacola
         2-agua
         3-zumo
         `
    );
}

else if ( menu === 'postre') {
    menu2 = window.prompt (
        `1-cafe
         2-yogur
         3-helado
         `
    );

}

window.alert (menu2);


switch (menu) {
    case 'comida':
    menu3 = window.prompt (`
    1-ensalada
    2-tofu
    3-banana
    `);
    break;
    case 'bebida':
    menu3 = window.prompt (`
    1-cerveza
    2-agua
    3-zumo
    
    `);
    break;
    case 'postre':
    menu3 = window.prompt (`
    1-helado
    2-fruta
    3-crema catalana`
    );
    break;
};

window.alert (menu3) 

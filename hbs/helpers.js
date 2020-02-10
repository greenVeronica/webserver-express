const hbs = require('hbs'); //para usar los helpers y partials


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        //tomar la primer letra de cada palabra
        // y el resto en minusculas
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');


});
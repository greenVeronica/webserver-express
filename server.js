/**
 * tomamos el ejemplo de la libreria express
 */
const express = require('express')
const app = express()
const hbs = require('hbs'); //para usar los helpers y partials
require('./hbs/helpers');
//para publicar en heroku
//Si corre localmente no existe process.env.PORT entonces
const port = process.env.PORT || 3000;




//__dirname ES UNA VARIABLE GLOBAL  que  indica no importa donde este el sitio 
// publicado o guardado , a partir de ahi buscara sus rutas , ejemplo public, views....
//creando middelware--HACIENDO PUBLICO EL DIRECTORIO
app.use(express.static(__dirname + '/public')) // aca va un callback
    //EXPRESS HBS, el app siguiente tambien hace referencia al express

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); //para que pueda hacer el renderizado de las paginas con el uso de la plantilla handlebarsjs
//definir helpers

//usando el hbs:
app.get('/', (req, res) => { // generamos una solicitud get cuando el pad "/" es un slash
    //cualquier peticion que entre por / renderiza el home
    res.render('home', {
        //puedo enviar parametros
        nombre: 'veRonica grEEn',
        //anio: new Date().getFullYear(          ) NO ES NECESARIO VA POR EL HELPER
    }); //como usamos el view engine hbs

})

app.get('/about', (req, res) => { // generamos una solicitud get cuando el pad "/" es un slash
    //cualquier peticion que entre por / renderiza el home
    res.render('about', {
        //puedo enviar parametros
        //nombre: 'Vero', PARA EL ABOUT ESTE NO ES NECESARIO
        //anio: new Date().getFullYear(          ) NO ES NECESARIO VA POR EL HELPER
    }); //como usamos el view engine hbs

})


// app.get('/data', (req, res) => { // generamos una solicitud get cuando el pad "/data" es un slash
//     res.send('Hola data')


//     res.send(salida);

// })



app.listen(port, () => {
    console.log(`estamos escuchando el puerto ${port}`);

})
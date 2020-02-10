//ir a la pagina de node https://nodejs.org/es/
//ir a documentacion
//seleccionar el api mas reciente
//buscar HTTP
//el HTTP permite crear rapidamente un web server
/**
 * usaremos un HTTP  para montar un web server
 * usaremos la libreria $ npm install express
 * que sirve para manejar menor el http:
 * ejecutar:
 * npm install express --save(porque la vamos a necesitar luego)
 */
const http = require('http');

/**
 * para poder empezar a escuchar peticiones http
 * 1) hay que crear un servidor
 */
http.createServer((req, res) => { //recibe un callback recibe y envia los request y responses.

        //este res genera un pagina web donde podremos mostrar contenido
        //primer version mas basica
        /*
            res.write('Hola Mundo');
            res.end();*/

        //modificando modificaciones de la pagina que genera el write
        res.writeHead(200, //codigo ok
            {
                'Content-Type': 'application/json'

            });
        let salida = {
            nombre: 'Vero',
            Apellido: 'green',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080); //identificar porque puerto / puertos estara escuchando
console.log('escuchando el puerto 8080');
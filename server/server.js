require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// esto es para captuirar los datos de un body de un html 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// esto es para captuirar los datos de un body de un html 




app.get('/usuario', function(req, res) {

    res.json({
        "formato": "esto es un formato para una peticion get en json "
    })
});


// como obtenemos la informacion d dfe la parte del body de una pagina html 
//dfe la siguiente mabnera que se vera q=a continuaciuon gracias al paquete boduyparser 

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el parametro nombre en la aplicacion es obligatorio ',
            "nose ": "como esperas que se almacene en la base de dados si no se tiene el nopmbre ",

        });


    } else {

        res.json({
            body
        });
    }




});



// el vervo put es muy utilizado en la questio de actualizar registros para lço qual se 
// acostumbra mandar parametros por el url 
//como vemos en el enlace : id 

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;


    res.json({
        "nombre :": "este es un requierimiento de un nombre ",

        id: id + "esto es una concatenacioon "

    });
})



app.delete('/usuario', function(req, res) {
    res.send('delete Usuario')
})


app.listen(process.env.PORT, () => {
    console.log("escuchando en el puerto 3000")
})
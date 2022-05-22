//Instalar express,requerirlo y guardarlo en una const con el mismo nombre
//Instalar morgan,requerirlo 
//Guardar el objeto exprees en la const app
const express = require('express');
const morgan = require('morgan');
const app = express();
createRoles();

//Requerir unicamente mongoose de la database
const { mongoose } = require('./database');

//Settings => Configuraciones del servidor 
app.set('port', process.env.PORT || 3000); //Configurar de puerto por defecto o sino puerto 3000

//Middlewares => Procesar datos
app.use(morgan('dev')); //Respuesta del servidor 
app.use(express.json()); //Respuestas en formato Json

//Routes => Rutas del servidor
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/comentarios', require('./routes/comentario.routes'));
app.use('/api/diagnosticos', require('./routes/diagnostico.routes'));
app.use('/api/fallas', require('./routes/falla.routes'));
app.use('/api/motos', require('./routes/moto.routes'));


//Starting the serve
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));

});
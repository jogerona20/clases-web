const express = require('express');

//inicialisar express

const app = express();

//configuraciones

app.set('port', process.env.PORT || 3000)

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//Base de datos
require('./config/connection')
//ruta

app.use(require('./routes/personasRoute'))

//levantar el servidor

app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Ha ocurrido un error: ', error);
    }else{
        console.log('Servidor en puerto: ', app.get('port'));
    }
})


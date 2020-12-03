const express = require('express');

//inicialisar express

const app = express();

//configuraciones

app.set('port',process.env.PORT || 3000)

//ruta
app.get('/')

//levantar el servidor

app.listen(app.get('port'), (error)=> {
    if(error){
        console.log('Ha ocurrido un error: ',error);
    }else{
        console.log('Serviedor en puerto:', app.get('port'));
    }
})

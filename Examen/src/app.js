const express= require('express');
const cors = require('cors')

const app = express(); 
app.use(cors())

app.set('port', process.env.PORT || 3000 )

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./config/connection')

app.use(require('./routes/accRoute'))

app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Ha ocurrido un error: ', error);
    }else{
        console.log('Servidor en puerto: ', app.get('port'));
    }
})


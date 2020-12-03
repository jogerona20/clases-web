const mysql= require('mysql')

const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "root",
    "database": "examen"
}

const myConn= mysql.createConnection(objectConnection);

myConn.connect((error)=>{
    if(error){
        console.log("Error al conectar la BD", error);
    }else{
        console.log("Se conecto la BD");
    }
})

module.exports= myConn;

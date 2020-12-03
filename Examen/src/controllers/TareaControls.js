
const connection = require('../config/connection');


async function getTareas(req, res) {

    if(connection){
        let sql = 'select * from TAREAS';
        connection.query(sql, (err, TAREAS) =>{
            if(err){
                res.send(err)
            }else{
                res.json(TAREAS);
            }
        })
    }
}

function agregarTarea(req,res){

    if(connection){
        let sql = 'INSERT INTO TAREAS set?'; 
        connection.query(sql,[TAREAS],(err,rows)=>{
            if(err){
                res.json(err)
            }else{
                res.json({error:false,data:rows,mesaje:"Tarea Agregada"})
            }
        })
    }
}

function ObternerTarea(req,res){
    if(connection){
        const {id} = req.params;
        let sql= `SELECT * FROM TAREAS WHERE id= ${connection.escape(id)}`;
        connection.query(sql,(err,TAREA)=>{
            if(err){
                res.json(error);
            }else{
                let mensaje = "";
                if(TAREA === undefined || TAREA.length === 0)
                mensaje = "TAREA no encontrada";

                res.json({error: false, data: TAREA, mensaje: mensaje})
            }
        })
    }
}

module.exports = {
    getTareas: getTareas,
    postTareas:agregarTarea,
    getObtener:ObternerTarea
    
}
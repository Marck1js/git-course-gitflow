const express = require('express');


const app = express();


app.get('/', (req,res)=>{
    res.send({msg: "Welcome To 'Git-Course' proyect"})
})


app.listen(3001, ()=>{
    console.log('Escuchando en puerto 3001')
})
const express = require('express');


const app = express();


app.get('/', (req,res)=>{
    res.send({msg: "Welcome To 'Git-Course' proyect"})
})

app.get('/about', (req,res)=> {
    res.send({msg: "Estas en otra ruta llamada: '/about' "})
})


app.listen(3001, ()=>{
    console.log('Escuchando en puerto 3001')
})
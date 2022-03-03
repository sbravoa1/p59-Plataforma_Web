const express = require('express')

let app=express()

app.use('/', function(req,res){
    res.send('hola mundo')
})

let puerto=8000
app.listen(puerto)
console.log(`la aplicacion esta escuchando http://localhost:${puerto}`)
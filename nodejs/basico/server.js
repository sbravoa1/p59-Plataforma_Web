const express = require('express')
const router= express.Router()

let app=express()

app.use(router)

router.get('/',function(req,res){
    res.send('hola mundo desde get')
})

router.post('/',function(req,res){
    res.send('hola mundo desde get')
})

let puerto=8000
app.listen(puerto)
console.log(`la aplicacion esta escuchando http://localhost:${puerto}`)
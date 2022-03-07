const express = require('express')
const bodyParse = require('body-parser')
const response = require('./network/response')


const router= express.Router()

let app=express()


app.use(bodyParse.json())
app.use(bodyParse.urlencoded( {extended:false} ) )
app.use(router)

router.get('/mensaje',function(req,res){
    if(req.query.error =='ok'){
        response.success(req,res,'error desde get')
    }else{
        response.success(req,res,'hola desde get')
    }
    
})

router.post('/mensaje',function(req,res){
    
    response.success(req,res,'hola desde post')
})

router.delete('/mensaje', function(req,res){
    response.success(req,res,'hola desde delete')
})

app.use('/', express.static('publicc'))


let puerto=8000
app.listen(puerto)
console.log(`la aplicacion esta escuchando http://localhost:${puerto}`)
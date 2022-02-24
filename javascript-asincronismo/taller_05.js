const fetch = require('./utils/fetch')
const API = 'https://rickandmortyapi.com/api/character'

function obtenerPersonaje(id){
    return fetch(`${API}${id}`)
}
obtenerPersonaje(1)
    .then((dato)=>{
        console.log(dato.name)
    })
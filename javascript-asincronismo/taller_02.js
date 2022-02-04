function saludar(nombre, fn){
    setTimeout(function () {
        console.log('hola '+ nombre)
        fn(nombre,adios)
    },1000)
}
function hablar(nombre, fn) {
    setTimeout(function () {
        console.log('blaa... blaa... blaa...')
        fn(nombre)
    },1000)
}
function adios(nombre) {
    setTimeout(function(){
        console.log(`adios ${nombre}`)
        console.log('finalizando conversacion....')
    },1000)
}
saludar('samuel', hablar )
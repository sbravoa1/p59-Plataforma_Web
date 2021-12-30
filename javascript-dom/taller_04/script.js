function agregar_elemento(){
    var texto = document.getElementById('texto')

    var container = document.getElementById('container')
    container.innerHTML= '<h1>' + texto.value + '</h1>'
}
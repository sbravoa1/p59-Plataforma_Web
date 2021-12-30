var offset=[0,0]
var divcajita=document.getElementById('cajita')
var esPresionada = false

divcajita.addEventListener('mousedown', function(e){
    esPresionada=true
    console.log('[mousedown]')
    console.log('offsetleft: '+divcajita.offsetLeft+' - Coordx: '+e.clientX)
    console.log('offsetTop: '+divcajita.offsetTop+' - Coordy: '+e.clientY)
    
    offset=[
        divcajita.offsetLeft - e.clientX, 
        divcajita.offsetTop - e.clientY,
    ]
}, true)

divcajita.addEventListener('mouseup',function(){
    esPresionada=false
}, true)

divcajita.addEventListener('mousemove',function(e){
    console.log('[mousemove]')

    e.preventDefault()
    if(esPresionada==true){
        divcajita.style.left=(e.clientX+offset[0]) + 'px'
        divcajita.style.top=(e.clientY+offset[1]) + 'px'
    }
},true)
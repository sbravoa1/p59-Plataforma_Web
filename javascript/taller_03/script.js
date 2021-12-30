function imprimirResultado(){
    console.log('hola mundo')
}
imprimirResultado()

const suma = function(a, b){
    return (a + b)
}
let resultado = suma(5, 5)
console.log(resultado)

const suma2 = (a,b) => a+b

let resultado2 = suma2(7,9)
console.log(resultado2)

const suma3 = (a,b) => {
    c = a+b
    return c
}

let resultado3 = suma3(6,4)
console.log(resultado3)

let mi_auto={
    marca: ' chevrolet',
    modelo: 'aveo famili',
    anio: 2021,
    detalle_auto: function(){
        console.log('Auto: '+this.marca +' - '+this.modelo+' Anio: '+this.anio)
    }
}
console.log(mi_auto.marca)
mi_auto.detalle_auto()

function auto(nombre, marca, anio){
    this.nombre=nombre
    this.marca=marca
    this.anio=anio
    this.detalle_auto=function(){
        console.log(`Auto: ${this.nombre} - ${this.marca} Anio: ${this.anio}`)
    }
}
let auto_nuevo = new auto('mazda', 'modelo 3', 2020)
auto_nuevo.detalle_auto()
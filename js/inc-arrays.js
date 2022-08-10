
let Saludo = alert ("¡¡Bienvenido a Atica Moda!!")
let aviso = confirm ("¿Desea ver nuestras nuevas prendas?")
        



class Prenda {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }

    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
}

function crearID() { return parseInt(Math.random() * 100000) }


function agregarPrendas() {
    let id = crearID()
    let descripcion = prompt("Ingresa el nombre de la prenda:")
    let importe = parseInt(prompt("Ingresa el importe:"))

        prendas.push(new Prenda(id, descripcion, importe))
        console.table(prendas)
}

function generadorAutomatico() {
    prendas.push(new Prenda(2545, "REMERA ALGODÓN ESTAMPADA", 2300))
    prendas.push(new Prenda(80196, "BUZO FRIZZA", 3500))
    prendas.push(new Prenda(7445, "PANTALON JEANS ", 8560))
    prendas.push(new Prenda(77580, "CAMPERA PUFFER NEGRA", 12500))
    prendas.push(new Prenda(95331, "CAMPERA PUFFER SALMON", 12500))
    prendas.push(new Prenda(43018, "JEANS AZUL OSCURO", 8590))
    prendas.push(new Prenda(6872, "REMERA MANGAS LARGAS CORAZÓN", 2900))
    prendas.push(new Prenda(43932, "BODY ESCOTE ESPALDA", 1980))
}



const prendas = []


function recorrerElementos() {
    for (let prenda of prendas) {
        console.table(prenda)
    }

}

const campos = document.querySelectorAll("input")
const cargar = document.querySelector(".button.button-outline")

function listInfo(){
    campos.forEach(campo => {
        console.log(campo.value)
    })
}

function focoEnCampos() {
    campos.forEach (campo => {
        campo.addEventListener("focus", ()=> { campo.className = "button"})
    })
}

focoEnCampos()

btnCargar.addEventListener("mousemove", ()=> {
    btnCargar.title = "Excelente elección"
})
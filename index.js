// Modificando el html
window.addEventListener('load', function (){
let titPrincipal = document.getElementById("titPrincipal")
titPrincipal.innerHTML = "Pagina de venta" 

document.getElementById("almacenar").addEventListener('click', almacenar)
document.getElementById("verInsertados").addEventListener('click', verInsertados)
document.getElementById("verTodo").addEventListener('click', verTodo)
document.getElementById("eliminarInsertados").addEventListener('click', eliminarInsertados)
document.getElementById("eliminarTodos").addEventListener('click', eliminarTodos)



})

function almacenar(){
    localStorage.setItem("colorPreferido", "rojo");
    localStorage.setItem("mascota", "perro");
    localStorage.setItem('bienvenida', '¡Hola Coder!');
    localStorage.setItem('esValido', true);
    localStorage.setItem('unNumero', 20);
}

function verInsertados(){
    let color = localStorage.getItem("colorPreferido")
    document.querySelector("p").innerText = color;
}

function verTodo(){
    items = "";
    let clave;
    for(let i=0; i<localStorage.length; i++){
        clave = localStorage.key(i)
        items += localStorage.getItem(clave)
    }
    document.querySelector("p").innerText = items;
}

function eliminarInsertados(){}

function eliminarTodos(){}
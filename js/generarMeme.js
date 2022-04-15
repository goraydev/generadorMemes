import { boxCount, generarMeme, urlImagen } from "./apis.js";
import { crearCajasTexto, formulario } from "./interfaz.js";

const btnCrear = document.querySelector('#crear');
const contenedorImagen = document.querySelector('#contenedorImagen');

eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', mostrarImagen);

    formulario.addEventListener('submit', validarIngreso)

}


function mostrarImagen() {
    const img = document.createElement('img');
    img.src = urlImagen;
    img.className = 'object-cover';

    contenedorImagen.appendChild(img);

    crearCajasTexto(boxCount);
}

function validarIngreso(e) {
    e.preventDefault();
    
}


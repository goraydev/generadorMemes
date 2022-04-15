import { boxCount, generarMeme, urlImagen } from "./apis.js";
import { crearCajasTexto, formulario, mostrarAlerta } from "./interfaz.js";

const btnCrear = document.querySelector('#crear');
const contenedorImagen = document.querySelector('#contenedorImagen');
let campos = [];

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

    const caja = document.querySelectorAll('.caja');


    for (let i = 0; i < caja.length; i++) {
        if (caja[i].value === '') {
            mostrarAlerta();
            return;
        }

        campos = [...campos, caja[i].value];
    }
    generarMeme(campos);


}


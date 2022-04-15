import { resultado } from "./apis.js";

const contenenedorMemes = document.querySelector('#memes');
export const formulario = document.querySelector('#formulario');

export function mostrarMemes(resultado) {

    const { data: { memes } } = resultado;


    memes.forEach(element => {
        const { box_count, name, url, id } = element;


        const div = document.createElement('div');
        div.className = 'border-2 border-slate-400 w-60 h-60  flex flex-col gap-2 items-center';

        const img = document.createElement('img');
        img.className = 'w-full object-cover h-40';
        img.src = url;

        const pName = document.createElement('p');
        pName.textContent = `${name.slice(0, 20)}...`;

        const a = document.createElement('a');
        a.className = 'p-2 bg-blue-500 block w-full text-center text-white relative bottom-0'
        a.href = `generarMeme.html?id=${id}&box_count=${box_count}&url=${url}`;
        a.textContent = 'Generar';

        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(a);
        contenenedorMemes.appendChild(div);


    });
}


export function crearCajasTexto(cantidad) {


    for (let i = 0; i <= cantidad; i++) {
        const div = document.createElement('div');
        div.className = 'my-3';
        const inputCaja = document.createElement('input');
        inputCaja.classList.add('caja');
        inputCaja.type = 'text';
        inputCaja.placeholder = 'Ingrese texto';
        inputCaja.id = i;


        div.appendChild(inputCaja);

        formulario.appendChild(div);
    }

    const inputSubmit = document.querySelector('input');
    inputSubmit.type = 'submit';
    inputSubmit.value = 'Crear meme';
    inputSubmit.className = 'bg-blue-500 py-1 px-2 cursor-pointer rounded text-white';

    formulario.appendChild(inputSubmit);

}

export function mostrarAlerta() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete los campos',
    })
}



export function mostrarResultado(url) {
    const p = document.createElement('p');
    p.className = 'my-2 font-bold text-lg';
    p.textContent = 'Meme generado';
    const img = document.createElement('img');
    img.src = url;


    const divLoad = document.createElement('div');
    divLoad.innerHTML = `   
        <div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>
    `;

    limpiarHtml();
    resultado.appendChild(divLoad);
    setTimeout(() => {
        divLoad.remove();
        resultado.appendChild(p);
        resultado.appendChild(img);
    }, 2000);

}

function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

import { mostrarMemes, mostrarResultado } from "./interfaz.js";

//verificar el ID de la URL
//window.location.search nos devuelve la respuesta a la pregunta en nuestro caso sería id
export const parametrosURL = new URLSearchParams(window.location.search);
export let idMeme = Number(parametrosURL.get('id'));
export let boxCount = Number(parametrosURL.get('box_count'));
export let urlImagen = parametrosURL.get('url');



export function consultaMemes() {
    const url = 'https://api.imgflip.com/get_memes';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {

            console.log(resultado);
            mostrarMemes(resultado);
        })

}

export function generarMeme(campos) {
    

    let myHeaders = new Headers();
    myHeaders.append("Cookie", "claim_key=I6gbyr2m6v2i3BbOSarjRQjOyApWEPtU");

    var formdata = new FormData();
    formdata.append("template_id", idMeme);
    formdata.append("username", "toheneb279");
    formdata.append("password", "toheneb279");

    /* de acuerdo a la cantidad de texto que envio mostraremos la imagen
        y la mostraremos
    */

    for (let i = 0; i < campos.length; i++) {
        formdata.append(`boxes[${i}][text]`, campos[i]);
    }

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://api.imgflip.com/caption_image", requestOptions)
        .then(response => response.json())
        .then(result => {
            
            mostrarResultado(result.data.url)
        })
        .catch(error => console.log('error', error));
}


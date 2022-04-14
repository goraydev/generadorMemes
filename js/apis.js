import { mostrarMemes } from "./interfaz.js";

export function consultaMemes() {
    const url = 'https://api.imgflip.com/get_memes';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {

            console.log(resultado);
            mostrarMemes(resultado);
        })

}

export function generarMeme() {

    //verificar el ID de la URL
    //window.location.search nos devuelve la respuesta a la pregunta en nuestro caso sería id
    const parametrosURL = new URLSearchParams(window.location.search);
    let idMeme = parametrosURL.get('id');
    let boxCount = parametrosURL.get('box_count');

    console.log(idMeme, boxCount);

    let myHeaders = new Headers();
    myHeaders.append("Cookie", "claim_key=I6gbyr2m6v2i3BbOSarjRQjOyApWEPtU");

    var formdata = new FormData();
    formdata.append("template_id", idMeme);
    formdata.append("username", "toheneb279");
    formdata.append("password", "toheneb279");
    formdata.append("boxes[0][text]", "regueton");
    formdata.append("boxes[2][text]", "rock");
    formdata.append("boxes[3][text]", "claro");
    formdata.append("boxes[4][text]", "si");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://api.imgflip.com/caption_image", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.data.url);
            console.log(result)
        })
        .catch(error => console.log('error', error));
}


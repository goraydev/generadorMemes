//para ver si el navegador soporta serviveWorker
if ('serviceWorker' in navigator) { //true

    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Se instalo correctamente', registrado))
        .catch(error => console.log('Fallo la instalación', error))
} else {
    console.log('Service worker no soportado');
}
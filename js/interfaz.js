const contenenedorMemes = document.querySelector('#memes');
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
        pName.textContent = name;

        const a = document.createElement('a');
        a.className = 'p-2 bg-green-600 block w-full text-center text-white relative bottom-0'
        a.href = `generarMeme.html?id=${id}&box_count=${box_count}`;
        a.textContent = 'Generar';

        div.appendChild(img);
        div.appendChild(pName);
        div.appendChild(a);

        contenenedorMemes.appendChild(div);

    });



}
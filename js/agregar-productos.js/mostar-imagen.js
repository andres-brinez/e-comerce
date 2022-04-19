import { eliminar_imagen} from "./eliminar-imagen.js";

export function mostrar_imagen(ev) {
    console.log('mostrar imagen');
    const contenedor = document.querySelector('.contenedor-imagen');
    contenedor.classList.remove('ocultar')
    console.log(contenedor.className)

    const caja_imagen = document.createElement('div');
    contenedor.appendChild(caja_imagen);
    caja_imagen.classList.add('box-img');
    caja_imagen.style.cursor = "pointer";
    caja_imagen.style.backgroundImage = "url('" + ev.target.result + "')";
    caja_imagen.classList.remove('ocultar')

    const parrafo = document.createElement('p');
    contenedor.appendChild(parrafo);
    parrafo.classList.add('box-parrafo');
    parrafo.innerText = 'da doble  click sobre la  imagen para eliminarla';
    parrafo.style.margin='0 0 10px 0'
    console.log('entro mostrar img ')

    // dblclick es dar doble click
    caja_imagen.addEventListener('dblclick', () => {
        eliminar_imagen( caja_imagen,parrafo)     
        console.log('entro eliminar ')

    })

}

import { eliminar_imagen } from "./eliminar-imagen.js";

export function mostrar_imagen(ev) {

    const contenedor = document.querySelector('.contenedor-imagen');
    contenedor.classList.remove('ocultar')


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
    parrafo.style.margin = '0 0 10px 0'

    const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')
    opciones_agregar_archivo.classList.remove('mostrar')
    opciones_agregar_archivo.classList.add('oculto')


    // dblclick es dar doble click
    caja_imagen.addEventListener('dblclick', () => {
        eliminar_imagen(caja_imagen, parrafo)

    })

}

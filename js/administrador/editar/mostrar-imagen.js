//muestra la  imagen que está en la api
import { eliminar_imagen} from "../mostrar-datos-administrador/agregar-productos/validaciones/eliminar-imagen.js";

export function mostrar_imagen(imagen){
    const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto') 
    opciones_agregar_archivo.classList.add('oculto')
    // <div class="box-img" style="cursor: pointer; background-image: url(&quot;./static/img/section-products/consolas/cuatro.svg&quot;);"></div>

    const contenedor = document.querySelector('.contenedor-imagen');
    contenedor.classList.remove('ocultar')

    const caja_imagen = document.createElement('div');
    contenedor.appendChild(caja_imagen);
    caja_imagen.classList.add('box-img');
    caja_imagen.style.cursor = "pointer";
    caja_imagen.style.backgroundImage = `url(${imagen})`;
    caja_imagen.classList.remove('ocultar')
   
    const parrafo = document.createElement('p');
    contenedor.appendChild(parrafo);
    parrafo.classList.add('box-parrafo');
    parrafo.innerText = 'da doble  click sobre la  imagen para eliminarla';
    parrafo.style.margin='0 0 10px 0'
  

    // dblclick es dar doble click
    caja_imagen.addEventListener('dblclick', () => {
        eliminar_imagen( caja_imagen,parrafo)    

    })
}
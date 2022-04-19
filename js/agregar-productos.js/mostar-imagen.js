export function mostrar_imagen(ev) {


    const contenedor = document.querySelector('#estado-imagen');
    const caja_imagen = document.createElement('div');
    contenedor.appendChild(caja_imagen);
    caja_imagen.classList.add('box-img');
    caja_imagen.style.backgroundImage = "url('" + ev.target.result + "')";


}

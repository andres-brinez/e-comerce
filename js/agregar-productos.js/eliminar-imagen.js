export  function eliminar_imagen(caja_imagen,parrafo){
    const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')
    opciones_agregar_archivo.style.display = 'flex';

    const contenedor = document.querySelector('.contenedor-imagen');
    parrafo.innerText = '';
    contenedor.classList.add('ocultar')
    caja_imagen.classList.add('ocultar')
}





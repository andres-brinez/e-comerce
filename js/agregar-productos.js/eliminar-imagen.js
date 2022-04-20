export  function eliminar_imagen(caja_imagen,parrafo){
    const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')
    
    opciones_agregar_archivo.classList.remove('oculto')
    opciones_agregar_archivo.classList.add('mostrar')
    

    const contenedor = document.querySelector('.contenedor-imagen');
    parrafo.innerText = '';
    contenedor.classList.add('oculto')
    caja_imagen.classList.add('oculto')
}





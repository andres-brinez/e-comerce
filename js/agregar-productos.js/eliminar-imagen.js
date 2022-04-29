export function eliminar_imagen(caja_imagen, parrafo) {
    const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')

    opciones_agregar_archivo.classList.remove('oculto')
    opciones_agregar_archivo.classList.add('mostrar')


    const contenedor = document.querySelector('.contenedor-imagen');
    //eliminar  imagen
    contenedor.childNodes[0].remove()
    //eliminar  la el texto
    contenedor.childNodes[0].remove()

}
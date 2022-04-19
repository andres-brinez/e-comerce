import { mostrar_imagen } from "./mostar-imagen.js";

export function validarFile(file) {
    const doctype = file.type;
    const validExtents = ['image/jpeg', 'image/jpg', 'image/png'];


    //si la  imagen esta dentro de las extenciones permitidas
    if (validExtents.includes(doctype)) {
        console.log('archivo permitido ')
        //muestra eliminar  las  opciones de agregar la  imagen
        const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')
        opciones_agregar_archivo.style.display = 'none';


        //muestra imagen    
        var arch = new FileReader(); /* FileReader es un objeto con el único porpósito de mostrar_imagen datos desde objetos de tipo Blo */
        arch.addEventListener('load', mostrar_imagen);
        // //readAsDataURL representa la información del archivo como una cadena de caracteres codificados en base64,url.
        arch.readAsDataURL(file);
    }

    else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'formato del archivo no permitido ',
        })
    }

}



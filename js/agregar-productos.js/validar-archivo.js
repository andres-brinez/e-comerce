const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')

export function validarFile(file) {
    const doctype = file.type;
    const validExtents = ['image/jpeg', 'image/jpg', 'image/png'];

    
    //si la  imagen esta dentro de las extenciones permitidas
    if (validExtents.includes(doctype)) {
        opciones_agregar_archivo.style.display = 'none';
            const texto_exitoso = `
            <div class='file-container'>
                    <span>imagen subida  correctamente </span>
                    
            </div>
            `
           const mensaje= document.querySelector('#estado-imagen');
            mensaje.innerHTML=texto_exitoso;
            mensaje.classList.add('mensaje-activo')

       
    }

    else {
      
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'formato del archivo no permitido ',
        })
     
    }


}

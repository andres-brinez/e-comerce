import { validarFile } from "./validar-archivo.js";

const input_file = document.querySelector('#input-file');


input_file.addEventListener('change', (ev) => {
    const file = ev.target.files[0]
    validarFile(file)
    

    var arch = new FileReader(); /* FileReader es un objeto con el único porpósito de mostrar_imagen datos desde objetos de tipo Blo */
    arch.addEventListener('load', mostrar_imagen);
    //readAsDataURL representa la información del archivo como una cadena de caracteres codificados en base64,url.
    arch.readAsDataURL(file);


});




function mostrar_imagen(ev) {

    const file_url = ev.target.result;
    const contenedor=   document.querySelector('#estado-imagen');
    const caja_imagen=document.createElement('div');
    contenedor.appendChild(caja_imagen);
    caja_imagen.classList.add('box-img');
    caja_imagen .style.backgroundImage = "url('" + ev.target.result + "')";
    
  
    
  
}




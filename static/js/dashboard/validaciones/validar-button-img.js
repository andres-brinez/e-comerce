import { validarFile } from "./validar-archivo.js";

// Para validar la opcion de agregar  una  imagen por medio de un input type  file

function inputFileValidate() {
    const input_file = document.querySelector('#input-file');
    console.log(input_file);

    // cuando se selecciona una imagen 
    input_file.addEventListener('change', (ev) => {
        const file = ev.target.files[0]

        validarFile(file)
    });

}


export { inputFileValidate }


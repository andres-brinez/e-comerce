import { validarFile } from "./validar-archivo.js.js.js";

const input_file = document.querySelector('#input-file');

//para saber cuando se selecciona una imagen
input_file.addEventListener('change', (ev) => {
    const file = ev.target.files[0]
    validarFile(file)
});


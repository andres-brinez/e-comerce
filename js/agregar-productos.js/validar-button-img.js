import { validarFile } from "./validar-archivo.js";

const input_file = document.querySelector('#input-file');


input_file.addEventListener('change', (ev) => {
    const file = ev.target.files[0]
    console.log('dio click input_file')
    validarFile(file)
});


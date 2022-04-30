import { validarFile } from "./validar-archivo.js";


const container_arrastrar_imagen = document.querySelector('.container-arrastrar-imagen');
let files;

//para cuando arrastramos el  archivo  sobre el contenedor
container_arrastrar_imagen.addEventListener('dragover', (evento) => {
    evento.preventDefault();
    container_arrastrar_imagen.classList.add('active');
    container_arrastrar_imagen.textContent = 'suelta para subir  los archivos '
})

//para cuando arrastramos el  archivo  afuera  del contenedor
container_arrastrar_imagen.addEventListener('dragleave', (evento) => {
    evento.preventDefault();
    container_arrastrar_imagen.classList.remove('active');
    container_arrastrar_imagen.textContent = 'Arrastre para agregar una imagen para el producto '
})


//para cuando soltamos el  archivo  dentro del contenedor
container_arrastrar_imagen.addEventListener('drop', (evento) => {
    evento.preventDefault();
    files = evento.dataTransfer.files//obtiene la referencia de  la  imagen
    validarFile(files[0])
    container_arrastrar_imagen.classList.remove('active');
    container_arrastrar_imagen.textContent = 'Arrastre para agregar una imagen para el producto '

})





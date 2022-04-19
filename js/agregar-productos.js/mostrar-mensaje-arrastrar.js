const container_arrastrar_imagen = document.querySelector('.container-arrastrar-imagen');

export function mostrar_mensaje_add(evento,clase,mensaje){
    container_arrastrar_imagen.addEventListener(evento, (evento) => {
        evento.preventDefault();
        console.log('salio')
        container_arrastrar_imagen.classList.add(clase);
        container_arrastrar_imagen.textContent = mensaje
    })

}

export function mostrar_mensaje_remove (evento,clase,mensaje){

    container_arrastrar_imagen.addEventListener(evento, (evento) => {
     console.log('entro')
    evento.preventDefault();
    container_arrastrar_imagen.classList.remove(clase);
    container_arrastrar_imagen.textContent = mensaje
})
    
}
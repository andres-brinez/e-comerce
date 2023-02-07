import { findProduct } from "./findProduct.js";
import { AddProductStructure } from "./estructura.js";


function filtroIcon (){
    const lupaIcon=document.querySelector(".buscador-lupa")
    lupaIcon.addEventListener("click", ()=>{

        const coincidencias = findProduct()
    
        if (coincidencias.length == 0){
            Swal
                .fire({
                    title: "Lo sentimos",
                    text: `No hay resultados para la busqueda ${campo_filtrar.value} `,
                    icon: "info",
                    button: "Ok!",
                })
                // .then(resultado => {
                //     //cuando cierre el mensaje en ok
                //     if (resultado.value) {
                //         location.reload();
                        
                //     } 
                // });
        }
        else {
            //Crea la estructura en html para ver  los productos que coinciden con lo ingresado 
            AddProductStructure(coincidencias)
        }
    
    })
}

export  {filtroIcon}

   


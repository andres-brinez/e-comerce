import { data } from "../../../Information/data.js";

// obtiene el producto con los datos de  la url
function getProduct(){
    
    // obtener  los valores de  la url
    const url = new URL(window.location); 
  
    // obtener la  informacion del producto desde la url 
    
    const category= url.hash.split('&')[1].split('=')[1].replace('%20',' ')
    const idUrlProduct= url.hash.split('&')[0].split('=')[1]
    
    for   (let i=0; i< data[category].length; i++) {
        if (data[category][i].id == parseFloat(idUrlProduct)) {
            return data[category][i]
        }
        
    }
}

export  {getProduct}
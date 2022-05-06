function json_server(url,img,input_name,input_price, descripcion_product,categoria){
    console.log(url)
    return fetch(url,{
        mode: 'cors',
        method: 'POST',
        headers: {
            contentType: 'application/json',
            'Access-Control-Allow-Origin': '*',
            
        },
        body: JSON.stringify(img,input_name,input_price, descripcion_product,uuid.v4(),categoria,)
    })

}


export function agregar_json (img,input_name,input_price, descripcion_product,categoria){
    const nombre =input_name.value;
    const precio = input_price.value;
    const descripcion= descripcion_product.value;
    let url=""

    if (categoria ==='Consolas'){
        url = 'https://productos-ecomerce.herokuapp.com/consolas'

    }
    else if (categoria=== 'StarWars'){
        url = 'https://productos-ecomerce.herokuapp.com/start_wars'

    }
    else if (categoria=== 'Diversos'){
        url = 'https://productos-ecomerce.herokuapp.com/diversos'
        
    }

    else{
        url = 'https://productos-ecomerce.herokuapp.com/otros'
        
    }

    json_server(url,img,nombre,precio, descripcion,categoria).then(response => {
        console.log(response)
    }).catch(err => {console.log(err)});

    console.log(url)
    console.log(img)
    console.log(nombre)
    console.log(precio)
    console.log(descripcion)
    console.log(categoria)
}
function informationProducto (idUrlProduct,Category,data){

    

    for   (let i=0; i< data[Category].length; i++) {
        if (data[Category][i].id == parseFloat(idUrlProduct)) {
            return data[Category][i]
        }
        
    }


}

export {informationProducto}
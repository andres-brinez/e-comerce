function informationProducto (idUrlProduct,Category,data){

    const newCategory = Category.replace('%20',' ')

    for   (let i=0; i< data[newCategory].length; i++) {
        if (data[newCategory][i].id == parseFloat(idUrlProduct)) {
            return data[newCategory][i]
        }
        
    }


}

export {informationProducto}
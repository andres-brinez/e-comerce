//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);
//searchParams.get de la  url nos trae el elemento que especifivamos 
const id = url.searchParams.get('id');
const administrador = url.searchParams.get('administrador');

console.log(id)


const deleteIcons = document.getElementsByClassName("icon-eliminar");
console.log(deleteIcons);
//new URL es una funcion ya echa que nos trae la url

//searchParams.get de la  url nos trae el elemento que especifivamos 

console.log(administrador)

for (let i = 0; i < deleteIcons.length; i++){
    let icono= deleteIcons[i]
    console.log(i)
    console.log(icono)
}
    
// deleteIcons.forEach((icon) =>
// 			icon.addEventListener("click", async (e) => {
// 				const productId = e.target.parentElement.id;
// 				if (productId.length > 3) {
// 					swal({
// 						title: "Esta seguro de querer eliminar el producto?",
// 						text: "Una vez eliminado no se podra recuperar!",
// 						icon: "warning",
// 						buttons: true,
// 						dangerMode: true,
// 					}).then((willDelete) => {
// 						if (willDelete) {
// 							swal("Producto Eliminado con exito!", {
// 								icon: "success",
// 								button: false,
// 							});
// 							if (url.searchParams.get("results")){
// 									clientControllers.eliminarProducto(productId);
// 							}else{clientControllers.eliminarProducto(productId);}
								
// 							window.setTimeout(() => window.location.reload(), 2000);
// 						} else {
// 							swal("Tu producto no se elimino");
// 						}
// 					});
// 				} else {
// 					swal({
// 						title: "Opss!",
// 						text: "No es posible eliminar este producto!",
// 						icon: "error",
// 						button: "Ok!",
// 					});
// 				}
// 			})
// 		);


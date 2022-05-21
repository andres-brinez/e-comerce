// esto valida si el usuario es administrador  para poder acceder a esta  funcionalidad de

//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);
//searchParams.get de la  url nos trae el elemento que especifivamos 

const administrador = url.searchParams.get('id')
console.log(administrador)


const boton = document.querySelector('.btn-agregar-producto')
// console.log(boton) 



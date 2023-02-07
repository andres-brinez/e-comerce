import  { filtroIcon } from '../Filtro/index.js'

function headerBasic(){

    header.innerHTML=`
    <div class="left">
      <div class="contenedor-icon">
        <h1>
          <a href="/"
          ><img
            class="icon-image"
            src="./static/img/header/icon.svg"
            alt="icono video juego"
        /></a>
          <img class="icon_leter_one" src="./static/img/header/Alura.svg" alt="icono alura" />
          <img class="icon_leter_two" src="./static/img/header/Geek.svg" alt="icono geek" />
        </h1>
      </div>
      <div class="contenedor-buscador">
        <input type="text" class="buscador-input" placeholder="¿Qué categoria deseas buscar?" input-buscar />
        <img src="./static/img/header/lupa.svg" alt="lupa" class="buscador-lupa" />
      </div>
    </div>
    <div class="right">
      <a href=".#login" class="button-login">Ingresar</a>
      <a href="#register" id="button-registrarce" class="button-login">Registrarce</a>
    </div>
    `

    filtroIcon() //  llama las funciones para filtrar

}

function headerLogin(){
    header.innerHTML=`
    <div class="left">
      <div class="contenedor-icon">
        <h1>
          <a href="/"
          ><img
            class="icon-image"
            src="./static/img/header/icon.svg"
            alt="icono video juego"
        /></a>
          <img class="icon_leter_one" src="./static/img/header/Alura.svg" alt="icono alura" />
          <img class="icon_leter_two" src="./static/img/header/Geek.svg" alt="icono geek" />
        </h1>
      </div>
    </div>
    <div class="right">
      <a href="#register" id="button-registrarce" class="button-login">Registrarce</a>
    </div>
    `
}

function headerRegister(){

    header.innerHTML=`
    <div class="left">
      <div class="contenedor-icon">
        <h1>
          <a href="/"
          ><img
            class="icon-image"
            src="./static/img/header/icon.svg"
            alt="icono video juego"
        /></a>
          <img class="icon_leter_one" src="./static/img/header/Alura.svg" alt="icono alura" />
          <img class="icon_leter_two" src="./static/img/header/Geek.svg" alt="icono geek" />
        </h1>
      </div>
     
    </div>
    <div class="right">
      <a href=".#login" class="button-login">Ingresar</a>
    </div>
    `


}

function headerDashboard(){
    header.innerHTML=`
    <div class="left">
      <div class="contenedor-icon">
        <h1>
          <a href="/"
          ><img
            class="icon-image"
            src="./static/img/header/icon.svg"
            alt="icono video juego"
        /></a>
          <img class="icon_leter_one" src="./static/img/header/Alura.svg" alt="icono alura" />
          <img class="icon_leter_two" src="./static/img/header/Geek.svg" alt="icono geek" />
        </h1>
      </div>
    </div>
    <div class="right">
      <a href="" id="button-registrarce" class="button-login buttonSalir">Salir</a>
    </div>
    `
}

export {headerBasic, headerLogin,headerRegister,headerDashboard}
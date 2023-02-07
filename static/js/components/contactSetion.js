import { validateForm } from "../validaciones/validar-form-contact.js"

function setionContact(){


    const contenido =`
    <div class="section-contact">
    <div class="contact-img">
      <img class="icon-image-contact" src="./static/img/header/icon.svg" alt="icono video juego" />
      <img class="icon_leter_one-contact" src="./static/img/header/Alura.svg" alt="icono alura" />
      <img class="icon_leter_two-contact" src="./static/img/header/Geek.svg" alt="icono geek" />
    </div>

    <div class="links">
      <a href="#">Quienes somos</a>
      <a href="#">Política de privacidad</a>
      <a href="#">Programa de fidelidad</a>
      <a href="#">Nuestras Tiendas</a>
      <a href="#">Quiero ser franquiciado</a>
      <a href="#">Anúncie aquí</a>
    </div>

    <div class="form">
      <h2 class="form-titulo">Hable con nosotros</h2>
      <div class="contenedor-input-name">
        <label for="input-name">Nombre</label>
        <input type="text" id="input-name" class="input-name" placeholder="Andres Briñez">
      </div>
      <textarea cols="30" rows="4" id="mensaje" placeholder="Escribe tu mensaje"></textarea>
      <button class="input-button" type="submit">Enviar mensaje</button>
    </div>

  </div>
    `
    
    // insertAdjacentHTML .  inserta al árbol DOM los nodos resultaron de dicho análisis en la posición establecida
    // 'afterbegin': Después del propio elemento..
    main.insertAdjacentHTML('afterend',contenido)
    validateForm()

}

export  {setionContact}
import { getProduct } from "../../../utils/getProduct.js"
import { mostrar_imagen } from "../../validaciones/mostar-imagen.js"
function structureForm() {
  main.innerHTML = ''
  const producto = getProduct()
  main.classList.add('main-agregar-producto')

  const contenedor = document.createElement('div')
  contenedor.classList.add('container')
  contenedor.innerHTML = `
    <h2>Editar producto</h2>
        <div class="contenedor-imagen"></div>
        <div class="opcion-agregar-producto">
          <div class="container-arrastrar-imagen">
            <!-- cambia la  imagen  dependiendo del tamaño de  pantalla -->
            <picture>
              <source
                media="(max-width:600px)"
                srcset="./static/img/agregar-producto/icono-mas.svg"
              />
              <source
                media="(min-width:601px)"
                srcset="./static/img/agregar-producto/icono-img.svg"
              />
              <img src="./static/img/agregar-producto/icono-mas.svg" alt="" />
            </picture>

            <p class="container-arrastrar-imagen-texto">
              Arrastre para agregar una imagen para el producto
            </p>
            <p class="container-arrastrar-imagen-texto movil">
              Agregar una imagen para el producto
            </p>
          </div>

          <p id="o">o</p>

          <!-- se relaciona el input  con el label por medio del input -->
          <input type="file" name="#cargar-archivo" id="input-file" />
          <label for="input-file" class="button-buscar" id="button-computador">
            Busque en su computador
          </label>

          <!-- no tiene funcionalidad -->
          <button class="button-buscar" id="button-tablet">
            Busque en su dispositivo
          </button>
        </div>

        <form>
          <div class="contenedor-input-name-product">
            <label for="input-name">Nombre del producto</label>
            <input
              type="text"
              id="input-name"
              class="input-name"
              value="${producto.nombre}"
            />
          </div>
          <div class="contenedor-input-price-product">
            <label for="input-price">Precio del produto</label>
            <input
              type="number"
              id="input-price"
              class="input-name"
              value="${parseFloat(producto.precio)}.00"
            />

          </div>
          <textarea
            class="descripcion-producto"
            cols="30"
            rows="4"
          >Descripción del producto
          \nVoluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita
          </textarea>

          <div class="categoria">
            <label for="categoria" class="categoria__label">Categoria</label>
            <select
              name="categoria"
              id="categoria"
              form="add__product__form"
              class="input__select__categoria"
            >
              <option value="Consolas">Consolas</option>
              <option value="StarWars">StarWars</option>
              <option value="Diversos">Diversos</option>
              <option value="Diversos">Otros</option>
            </select>
          </div>

          <button class="button-agregar-producto button-editar">
            Editar Producto
          </button>
        </form>
    `

  main.appendChild(contenedor)
  mostrar_imagen(producto.imagen,'editar')

}

export { structureForm }



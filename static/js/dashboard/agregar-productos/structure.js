// Solo en el caso de  los administradores saldrá esta opción

function addProductStructure(){

    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML=`
    <h2>Agregar nuevo producto</h2>
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
              placeholder="Producto XYZ"
            />
          </div>
          <div class="contenedor-input-price-product">
            <label for="input-price">Precio del produtco</label>
            <input
              type="number"
              id="input-price"
              class="input-name"
              placeholder="$ 60,00"
            />
          </div>
          <textarea
            class="descripcion-producto"
            cols="30"
            rows="4"
            placeholder="Descripción del producto"
          ></textarea>
          <div class="categoria">

            <label for="categoria" class="categoria__label">Categoria</label>
						<select name="categoria" id="categoria" form="add__product__form" class="input__select__categoria">
              <option value="Consolas">Consolas</option>
							<option value="StarWars">StarWars</option>
							<option value="Diversos">Diversos</option>
              <option value="Diversos">Otros</option>
						</select>
					</div>
          <button class="button-agregar-producto" type="file">
            Agregar producto
          </button>
        </form>
    `

    main.innerHTML=''
    main.classList.add('main-agregar-producto')
    main.appendChild(container);

}
export {addProductStructure}


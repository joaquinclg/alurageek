import { conexionAPI } from "./conectarAPI.js";

const lista = document.querySelector("[data-lista]");

function addCards(titulo, precio, imagen) {
  const card = document.createElement("li");
  card.className = "group relative";
  card.innerHTML =
    `
  <div
  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
>
  <img
    src="${imagen}"
    alt="Front of men&#039;s Basic Tee in black."
    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
  />
</div>
<div class="mt-4 flex justify-between">
  <div>
    <h3 class="font-semibold">
      <a href="#">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${titulo}
      </a>
    </h3>
  </div>
  <p class="text-sm font-medium">$` +
    precio +
    `</p>
</div>
  `;

  return card;
}

async function mostrarProductos() {
  try {
    const productos = await conexionAPI.getProductos();
    productos.forEach((producto) => {
      const card = addCards(producto.titulo, producto.precio, producto.imagen);
      lista.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    alert("No se pudo cargar los productos");
  }
}

mostrarProductos();

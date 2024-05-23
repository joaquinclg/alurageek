import { conexionAPI } from "./conectarAPI";

const form = document.querySelector("[data-form]");

async function handleSubmit(event) {
  event.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  if (!titulo || !precio || !imagen) {
    alert("Complete todos los campos");
    return;
  }

  try {
    await conexionAPI.postProductos(titulo, precio, imagen);
    alert("Producto agregado");
    window.location.href = "/";
  } catch (error) {
    console.error(error);
    alert("No se pudo agregar el producto");
  }
}

form.addEventListener("submit", handleSubmit);

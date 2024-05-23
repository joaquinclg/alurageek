// forzando una URL sin .env
const url_dev = "http://localhost:3000";
const url_prod = "http://127.0.0.1:5500";

async function getProductos() {
  const conn = await fetch(`${url_dev}/productos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await conn.json();
  return data;
}

async function postProductos(titulo, precio, imagen) {
  const conn = await fetch(`${url_dev}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      precio,
      imagen,
    }),
  });

  if (!conn.ok) {
    throw new Error("No se pudo agregar el producto");
  }

  const data = await conn.json();
  return data;
}

export const conexionAPI = {
  getProductos,
  postProductos,
};

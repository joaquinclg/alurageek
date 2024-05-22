export async function getProductos() {
  const conn = await fetch("http://localhost:3000/productos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await conn.json();
  return data;
}

export const conexionAPI = {
  getProductos,
};

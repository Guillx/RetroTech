const apiUrl = "http://localhost:4000";

const requestMethods = {
  post: "POST",
  get: "GET",
  put: "PUT",
  delete: "DELETE",
};

async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem("token");
  const headers = new Headers();
  headers.append("Authorization", token);

  return await fetch(`${apiUrl}${path}`, { method, headers, body });
}

async function fetchApi(path, { body, method }) {
  const token = localStorage.getItem("token");
  const headers = new Headers({ "Content-Type": "application/json" });
  if (token) {
    headers.append("Authorization", token);
  }
  const request = await fetch(`${apiUrl}${path}`, {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
  });
  const requestData = await request.json();
  if (requestData.status === "error") {
    throw requestData.message;
  }
  return requestData;
}

export async function login(email, contraseña) {
  const tokenData = await fetchApi("/usuarios/login", {
    method: requestMethods.post,
    body: { email, contraseña },
  });
  const token = tokenData.data.token;
  localStorage.setItem("token", token);
  return token;
}

export async function signUpApi(data) {
  return await fetchApi("/usuarios", {
    method: requestMethods.post,
    body: data,
  });
}

// Información de usuario (perfil)
export async function getUserInfo(userId) {
  const userData = await fetchApi(`/usuarios/${userId}`, {
    method: requestMethods.get,
  });
  return userData.data;
}

// Método para subir anuncios
export async function uploadProduct(data) {
  const body = new FormData();
  body.append("titulo", data.titulo);
  body.append("descripcion", data.descripcion);
  body.append("precio", data.precio);
  body.append("provincia", data.provincia);
  body.append("localidad", data.localidad);
  body.append("images", data.images);
  body.append("idCategoria", data.idCategoria);
  return await fetchFormData("/subir", {
    method: requestMethods.post,
    body,
  });
}

// Método que lista las categorías
export async function getCategoria() {
  const categoria = await fetchApi("/comprar", {
    method: requestMethods.get,
  });
  return categoria;
}

// // Método para listar anuncios de una categoria (no funciona)
// export async function getListaAnuncios(idCategoria) {
//   const userData = await fetchApi(`/comprar/${idCategoria}`, {
//     method: requestMethods.get,
//   });
//   return userData.data;
// }

// Método para editar usuario
export async function editarUsuario(
  idUsuario,
  userName,
  nombre,
  apellidos,
  foto,
  ciudad,
  pais,
  codigoPostal,
  fechaNacimiento
) {
  return await fetchApi(`/usuarios/${idUsuario}`, {
    method: requestMethods.put,
    body: {
      userName,
      nombre,
      apellidos,
      foto,
      ciudad,
      pais,
      codigoPostal,
      fechaNacimiento,
    },
  });
}

// Método para ver un anuncio
export async function getAnuncio(idCategoria, idAnuncio) {
  const verAnuncio = await fetchApi(`/comprar/${idCategoria}/${idAnuncio}`, {
    method: requestMethods.get,
  });
  return verAnuncio.data;
}

// Método para realizar la reserva de un producto
export async function reserveProduct(idCategoria, idAnuncio, mensajeCompra) {
  const response = await fetchApi(
    `/comprar/${idCategoria}/${idAnuncio}/proponer-compra`,
    {
      method: requestMethods.post,
      body: mensajeCompra,
    }
  );
  return console.log(response.data);
}

// Método para listar "mis anuncios"
export async function listMyProducts(idUsuario) {
  const product = await fetchApi(`/mis-anuncios/${idUsuario}`, {
    method: requestMethods.get,
  });
  return product.data;
}

// Método para borrar un anuncio
export async function deleteAnuncio(idAnuncio) {
  const deleteAnuncio = await fetchApi(`/mis-anuncios/${idAnuncio}`, {
    method: requestMethods.delete,
  });
  return deleteAnuncio;
}

// Método para listar "mis solicitudes"
export async function listarSolicitudes(idUsuario) {
  const solicitudes = fetchApi(`/mis-solicitudes/${idUsuario}`, {
    method: requestMethods.get,
  });
  return solicitudes;
}

// Método para aceptar las solicitudes de reserva
export async function aceptarReserva(idAnuncio, idCompra, data) {
  const response = await fetchApi(
    `/mis-anuncios/${idAnuncio}/solicitudes/${idCompra}`,
    {
      method: requestMethods.put,
      body: { lugarEntrega: data.lugarEntrega, horaEntrega: data.horaEntrega },
    }
  );
  return console.log(response);
}

// Método para cancelar las solicitudes de reserva
export async function deleteReserve(idCompra) {
  const responseDelete = await fetchApi(
    `/mis-anuncios/${idCompra}/solicitudes`,
    {
      method: requestMethods.delete,
    }
  );
  return responseDelete;
}

// Método para listar "mis reservas"
export async function listarReservas(idUsuario) {
  const solicitudes = fetchApi(`/mis-reservas/${idUsuario}`, {
    method: requestMethods.get,
  });
  return solicitudes;
}

// Método para la barra de búsqueda
export async function getSearch(input) {
  const userData = await fetchApi(`/busqueda?search=${input}`, {
    method: requestMethods.get,
  });
  return userData.data;
}

// Vendido
export async function productoVendido(idAnuncio, idCompra) {
  const responseVendido = await fetchApi(
    `/mis-anuncios/${idAnuncio}/${idCompra}/vendido`,
    {
      method: requestMethods.put,
    }
  );
  return responseVendido;
}

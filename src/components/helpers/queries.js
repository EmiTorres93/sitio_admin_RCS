const variable_entornoProductos = import.meta.env.VITE_API_PRODUCTOS;
const variable_entornoUsuario = import.meta.env.VITE_API_USUARIO;

//esta función recibe de parámetro un usuario con email y password. El objeto que validó react-hook-form es lo que le mando a esta función
export const login = async (usuario) => {
  try {
    const respuesta = await fetch(variable_entornoUsuario);
    const listaUsuario = await respuesta.json();

    const usuarioBuscado = listaUsuario.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        console.log("todo ok");
        return usuarioBuscado;
      } else {
        console.log("pass incorrecto");
      }
    } else {
      console.log("email o pass incorrecto");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const agregarProducto = async (producto) => {
  try {
    const respuesta = await fetch(variable_entornoProductos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    console.log(respuesta.json());

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const listaProductos = async () => {
  try {
    const respuesta = await fetch(variable_entornoProductos);
    const objetoProductos = await respuesta.json();
    return objetoProductos;
  } catch (error) {
    console.log(error);
    return null;
  }
};
/*const listaProductos = await respuesta.json();

    const productoBuscado = listaProductos.find(
      (itemProducto) => itemProducto.nombreProducto === producto.nombreProducto
    );

    if (productoBuscado) {
      if (
        productoBuscado.categoria === producto.categoria &&
        productoBuscado.precio == producto.precio
      ) {
        console.log("producto agregado");
        return productoBuscado;
      } else {
        console.log("la categoría o el precio del producto es incorrecto");
        return null;
      }
    } else {
      console.log("el nombre del producto es incorrecto");
      return null;
    }*/

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(variable_entornoProductos);
    console.log(respuesta);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
    return "En estos momentos no se pueden cargar los productos. Intente más tarde.";
  }
};

export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(`${variable_entornoProductos}/${id}`);
    const dato = await respuesta.json();
    return dato;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (id, productoEditado) => {
  try {
    const respuesta = await fetch(`${variable_entornoProductos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${variable_entornoProductos}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

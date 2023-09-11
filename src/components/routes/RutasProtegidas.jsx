import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/products/CrearProducto";
import EditarProducto from "../views/products/EditarProducto";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Administrador
          //mostrarProductosCargados={mostrarProductosCargados}
          //setMostrarProductosCargados={setMostrarProductosCargados}
          ></Administrador>
        }
      ></Route>
      <Route
        exact
        path="/crear"
        element={
          <CrearProducto
          //setMostrarProductosCargados={setMostrarProductosCargados}
          ></CrearProducto>
        }
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={<EditarProducto></EditarProducto>}
      ></Route>
    </Routes>
  );
};

export default RutasProtegidas;

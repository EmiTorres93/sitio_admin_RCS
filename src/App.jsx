import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/views/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearProducto from "./components/views/products/CrearProducto";
import EditarProducto from "./components/views/products/EditarProducto";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import { useState } from "react";
import EncapsularRutas from "./components/routes/EncapsularRutas";
import RutasProtegidas from "./components/routes/RutasProtegidas";

function App() {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioLogueado);

  return (
    <BrowserRouter>
      <Menu
        usuarioActivo={usuarioActivo}
        setUsuarioActivo={setUsuarioActivo}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioActivo={setUsuarioActivo}></Login>}
        ></Route>
        <Route
          exact
          path="/administrador"
          element={
            <Administrador
            //mostrarProductosCargados={mostrarProductosCargados}
            //setMostrarProductosCargados={setMostrarProductosCargados}
            ></Administrador>
          }
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={
            <CrearProducto
            //setMostrarProductosCargados={setMostrarProductosCargados}
            ></CrearProducto>
          }
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

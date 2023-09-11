import { Navigate } from "react-router-dom";
import Administrador from "../views/Administrador";

const EncapsularRutas = ({ children }) => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default EncapsularRutas;

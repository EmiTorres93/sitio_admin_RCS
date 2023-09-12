import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProducto from "./products/CardProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {}, []);

  return (
    <Container>
      <h1 className="display-4 text-center mb-5">Página Principal</h1>
      <hr />
      <h2 className="text-center mb-5"> Nuestros Productos</h2>
    </Container>
  );
};

export default Inicio;

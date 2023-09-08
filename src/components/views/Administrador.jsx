import { Container, Button, Table, Row, Card } from "react-bootstrap";
import ItemProducto from "./products/ItemProducto";
import { listarProductos } from "../helpers/queries";
import CardProducto from "./products/CardProducto";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos().then((respuestaProductos) => {
      if (respuestaProductos) {
        setProductos(respuestaProductos);
      } else {
        Swal.fire(
          "Ocurrió un error!",
          "Intente realizar esta operación más tarde",
          "error"
        );
      }
    });
  }, []);

  return (
    <>
      <Container>
        <h1 className="display-4 text-center fw-bold mb-5">Agregar Producto</h1>
        <hr />
        <Row>
          <CardProducto></CardProducto>
        </Row>
        <hr />
        {productos.length != 0 ? (
          <Table
            className="my-5 border border-dark-subtle border-5"
            responsive
            striped
            bordered
            hover
          >
            <thead className="border border-dark-subtle border-5">
              <tr className="border border-dark-subtle border-5">
                <th className="border border-dark-subtle border-5 text-center ">
                  Cod
                </th>
                <th className="border border-dark-subtle border-5 text-center">
                  Producto
                </th>
                <th className="border border-dark-subtle border-5 text-center">
                  Precio
                </th>
                <th className="border border-dark-subtle border-5 text-center">
                  Imagen
                </th>
                <th className="border border-dark-subtle border-5 text-center">
                  Categoría
                </th>
                <th className="border border-dark-subtle border-5 text-center">
                  Opciones
                </th>
              </tr>
            </thead>

            <tbody>
              {productos.map((producto) => (
                <ItemProducto
                  key={producto.id}
                  producto={producto}
                  setProductos={setProductos}
                ></ItemProducto>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="container" style={{ backgroundColor: "lightblue" }}>
            <h3 className="m-3 p-4 text-center">
              No hay ningún producto cargado
            </h3>
          </div>
        )}
      </Container>
    </>
  );
};

export default Administrador;

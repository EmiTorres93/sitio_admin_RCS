import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioActivo, setUsuarioActivo }) => {
  const navegacion = useNavigate();

  const logout = () => {
    //limpiar el State
    setUsuarioActivo({});
    //limpiar el sessionStorage
    sessionStorage.removeItem("usuarioLogueado");
    //redireccionar a la página principal
    navegacion("/");
  };

  return (
    <Navbar bg="danger" className="p-3 mb-5" variant="dark" expand="lg">
      <Container className="d-flex footerText fs-4">
        <div>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="logo.jpg"
              alt="logo.jpg"
              width={120}
              className="rounded-4 border border-end-0 border-5 border-dark"
            ></img>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className={"nav-link"} end to={"/"}>
                Inicio
              </NavLink>
              <NavLink className={"nav-link"}>Registro</NavLink>
              {usuarioActivo.email ? (
                <>
                  {" "}
                  <NavLink className={"nav-link"} end to={"/administrador"}>
                    Administrador
                  </NavLink>
                  <Button variant="dark" className="fw-bold" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink className={"nav-link"} end to={"/login"}>
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;

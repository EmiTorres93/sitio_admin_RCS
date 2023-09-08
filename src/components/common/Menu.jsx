import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
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
              <NavLink className={"nav-link"} end to={"/administrador"}>
                Administrador
              </NavLink>
              <NavLink className={"nav-link"} end to={"/login"}>
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;

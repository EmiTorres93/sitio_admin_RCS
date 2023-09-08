import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      className="footerText fs-5 bg-body-dark mt-5 p-4"
    >
      <Container className="d-flex flex-column justify-content-center mb-2 align-items-center">
        <div>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="logo.jpg"
              alt="logo.jpg"
              width={120}
              className="rounded-4 border border-start-0 border-5 border-danger"
            ></img>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-5 d-flex flex-column text-center">
              <NavLink className={"nav-link text-light fw-bold"} end to={"/"}>
                Inicio
              </NavLink>
              <NavLink className={"nav-link text-light fw-bold"}>
                Registro
              </NavLink>
              <NavLink
                className={"nav-link text-light fw-bold"}
                end
                to={"/administrador"}
              >
                Administrador
              </NavLink>
              <NavLink
                className={"nav-link text-light fw-bold"}
                end
                to={"/login"}
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;

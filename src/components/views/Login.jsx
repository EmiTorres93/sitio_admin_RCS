import { Container, Form, Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioActivo }) => {
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
    login(usuario).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "Bienvenida! " + respuesta.nombreUsuario,
          "Ingresaste a GameStore!",
          "success"
        );
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
        setUsuarioActivo(respuesta);
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrió un error!", "Email o password incorrecto", "error");
      }
    });
  };

  return (
    <>
      <h1 className="my-5 text-center">Para ingresar es necesario loguearse</h1>
      <Container className="mainSection d-flex">
        <div className="m-5">
          <img
            width={300}
            src="https://e7.pngegg.com/pngimages/392/854/png-clipart-super-mario-bros-digital-art-fan-art-jump-man-game-super-mario-bros.png"
            alt="image.png"
          />
        </div>
        <div className="w-50 mx-5 border border-light-subtle border-3 col-lg-8 control-label">
          <Card className="my-5 border border-light-subtle border-3">
            <Card.Header
              as="h5"
              className="border border-light-subtle border-3 my-2 text-center"
            >
              Login
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="mb-3">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese un email"
                    {...register("email", {
                      required: "El email es un dato obligatorio",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "El email debe cumplir con el formato válido",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5 " controlId="formBasicPassword">
                  <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "El password es un dato obligatorio",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Login;

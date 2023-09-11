# Proyecto Ecommerce Gamer

## Páginas de Proyecto

● **Página Principal:** Esta página mostrará el catálogo de juegos previamente cargados desde la página de administración. Además debe contener un filtro que nos permita buscar un juego por su nombre.

● **Página de administración:** En la página de administración se debe mostrar una tabla con los juegos cargados, además de las opciones necesarias para agregar, leer, borrar y editar los mismos. (solo los usuarios administradores deben poder ver esta página)

**>IMPORTANTE:** Sólo los usuarios administradores deben poder ver esta página.

● **Página de detalle:** al seleccionar un juego, veremos una página con más detalles del mismo. El juego debe tener como mínimo las siguientes propiedades:

○ Código único.
○ Nombre
○ precio
○ Categoría (sandbox, simulación, fabricación, construcción, aventura etc.)
○ Imagen (álbum o alguna imagen decorativa del juego) cargada con url ○ descripción
○ Requisitos del sistema
○ Desarrollador
○ Reseñas: positivas o negativas (optativo. Esta propiedad se debe calcular considerando la cantidad de reseñas positivas y negativas votadas por los usuarios)
○ NOTA: Pueden agregar más propiedades si lo consideran necesario.

● **Página acerca de nosotros:** Esta página contendrá información del equipo que desarrolló esta web, alguna frase que hable del equipo y debajo una galería donde se visualice una foto o avatar de cada miembro del equipo, seguido por el nombre de cada uno.

● **Página error 404:** Diseñar una web con el error 404, esta página deberá ser llamada desde todos los botones o link de nuestro sitio que no tengan una funcionalidad establecida.

● **Login:** diseñar una página o ventana modal desde donde un usuario administrador deberá poder ingresar sesión. (Este mismo login servirá para usuarios registrados en caso de realizar el requerimiento optativo).

---

### Herramientas 🛠️

1. Utilizamos [React-Bootstrap](https://react-bootstrap.netlify.app/) **v2.9.0** en nuestro proyecto para incoroporar el Container, Form, Button, InputGroup.

2. Usamos el **"bootstrap/dist/css/bootstrap.min.css"** para utilizar los estilos de Bootstrap.

3. Utilizamos la librería **"react-router-dom"** para usar los Componentes NavLink y Link para hacer los enrutamientos

---

> **IMPORTANTE:** Para todos los casos tenemos que importar estas herramientas con el **import**.

4. Usamos **json-server:** importante tenerlo instalado con el comando:

```bash
npm install -g json-server
```

- Luego debemos crear un archivo --> **db.json** en la raiz de nuestro proyecto.

- Debemos usar el comando:

```bash
 json-server --watch db.json --port 3004
```

Sirve para ejecutar json-server pero como por defecto lo ejecuta en el puerto 3000 debemos agregarle nosotros en qué puerto se va a ejecutar.

5. Utilizamos la librería **react-hook-form** para hacer las validaciones del formulario, también usando las expresiones regulares en los formularios. Lo instalamos con:

```bash
npm install react-hook-form
```

6. Instalamos la librería sweetalert para mostrar los mensajes de Alertas (éxito o error):

```bash
npm install sweetalert2
```

7. Existen 2 variables de entorno llamadas **VITE_API_PRODUCTOS** y **VITE_API_USUARIO**

### Repositorio 💻

El código del sitio se encuentran en el sgte. repositorio:
https://github.com/jonytellodev/grupo1gameproject/tree/main

- Para clonar el Repositorio:

```bash
git clone https://github.com/jonytellodev/grupo1gameproject/tree/main
```

- Para contribuir con el proyecto ponerse en contacto con el sgte. mail: **emi.mtorresbq@gmail.com**

## Autores 👩‍🏫

1. Torres Emiliana M. [GitHub](https://github.com/EmiTorres93)
2. Isaias Padros
3. Tello Carrasco Jonathan (T.L.)
4. Zelaya Sergio
5. Quipildor Tufi (S.M.)

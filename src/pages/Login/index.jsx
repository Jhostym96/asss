import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

import logo from "../../image/Logotipo.png";
import "./Login.css";

const Login = () => {

  const { login, isAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Completa todos los campos",
        icon: "error",
      });
      return;
    }


    const  inicio = await login(user.email,user.password);

    console.log(inicio);

    if (inicio === false) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrecta",
      });
      return;
    }
  };

  if (isAuth()) {
    return <Navigate to="/" />
  }

  return (
    <div className="container__login">
      <div className="card__login">
        <div className="login__headers">
          <img src={logo} alt="#" />
          <h2>Login</h2>
        </div>
        <div className="login__body">
          <form action="">
            <label htmlFor="">Usuario</label>
            <input
              type="text" placeholder="Ingrese su usuario"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            <label htmlFor="">Password</label>
            <input
              type="password" placeholder="Ingrese su contraseña"
              name="password"
              value={user.password}
              onChange={handleInputChange}

            />
          </form>
        </div>
        <div className="login__footer">

          <button
            onClick={handleLogin}
          >INGRESAR</button>

          <input type="button" value="¿Olvidaste tu contraseña?" />

          <Link to="/register" className="my-3 btn btn-link">
            ¡Registrate AQUI!
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Login;
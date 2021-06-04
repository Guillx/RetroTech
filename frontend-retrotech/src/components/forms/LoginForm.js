import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";
import "../../App.css";
import "../../assets/css/LoginForm.css";
import userlogin from "../../assets/images/user.svg";

import swal from "sweetalert";

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();

  const onLogin = async (data) => {
    try {
      await signIn(data.email, data.contraseña);
      swal("Login correcto", "Has iniciado sesión con éxito");
      if (errorMessage.length > 0) {
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <div className="body-login">
      <div className="caja-login">
        <img src={userlogin} className="img-login" alt=""></img>
        <h1 className="titulo-login">Inicia Sesión</h1>
        <form onSubmit={handleSubmit(onLogin)}>
          <label htmlFor="email" className="labels-forms-login">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <p className="error-forms-login">Usuario incorrecto</p>
          )}
          <label className="labels-forms-login" htmlFor="contraseña">
            Contraseña
          </label>
          <input
            id="contraseña"
            type="password"
            name="contraseña"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.contraseña && (
            <p className="error-forms-login">Contraseña incorrecta</p>
          )}
          {errorMessage.length > 0 && (
            <p className="error-forms-login">{errorMessage}</p>
          )}
          <button type="submit" className="btn-enviar-login">
            ¡Entrar!
          </button>
          <Link to="/" className="olvidada">
            ¿Has olvidado la contraseña?
          </Link>
          <p id="bordeado">
            ¿No tienes una cuenta?
            <Link to="/registro"> Regístrate</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

import { useForm } from "react-hook-form";
import "../../App.css";
import "../../assets/css/RegistroForm.css";

import useAuth from "../../shared/hooks/useAuth";
import iconregister from "../../assets/images/nuevo-usuario.svg";
import { Link } from "react-router-dom";

import swal from "sweetalert";
import { useState } from "react";

export default function RegistroForm() {
  const { signUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const onRegister = async (data) => {
    try {
      await signUp(data);
      swal(
        "Registro correcto",
        "En breves recibirás un email para validar tu cuenta."
      );
      if (errorMessage.length > 0) {
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <div className="body-registro">
      <div className="caja-registro">
        <img src={iconregister} className="img-registro" alt=""></img>
        <h1 className="titulo-registro">Regístrate</h1>

        <form onSubmit={handleSubmit(onRegister)} autocomplete="off">
          <div>
            <label htmlFor="userName" className="labels-forms">
              Nombre de Usuario
            </label>
            <input
              id="userName"
              type="text"
              name="userName"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.userName ? (
              <div className="error-forms-reg">{errors.userName.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="nombre" className="labels-forms">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.nombre ? (
              <div className="error-forms-reg">{errors.nombre.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="apellidos" className="labels-forms">
              Apellidos
            </label>
            <input
              id="apellidos"
              type="text"
              name="apellidos"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.apellidos ? (
              <div className="error-forms-reg">{errors.apellidos.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="ciudad" className="labels-forms">
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              id="ciudad"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.ciudad ? (
              <div className="error-forms-reg">{errors.ciudad.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="pais" className="labels-forms">
              País
            </label>
            <input
              type="country"
              name="pais"
              id="pais"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.pais ? (
              <div className="error-forms-reg">{errors.pais.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="codigoPostal" className="labels-forms">
              Código Postal
            </label>
            <input
              type="text"
              name="codigoPostal"
              pattern="[0-9]{5}"
              id="codigoPostal"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.codigoPostal ? (
              <div className="error-forms-reg">
                {errors.codigoPostal.message}
              </div>
            ) : null}
          </div>
          <div>
            <label htmlFor="fechaNacimiento" className="labels-forms">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="fechaNacimiento"
              id="fechaNacimiento"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.fechaNacimiento ? (
              <div className="error-forms-reg">
                {errors.fechaNacimiento.message}
              </div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="labels-forms">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.email ? (
              <div className="error-forms-reg">{errors.email.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="contraseña" className="labels-forms">
              Contraseña
            </label>
            <input
              type="password"
              name="contraseña"
              id="contraseña"
              ref={register({
                required: "Campo obligatorio",
              })}
            />
            {errors.contraseña ? (
              <div className="error-forms-reg">{errors.contraseña.message}</div>
            ) : null}
          </div>
          <div className="bot-reg">
            <button type="submit" className="btn-enviar-reg">
              Enviar
            </button>
            <p id="bordeado">
              ¿Ya tienes una cuenta?
              <Link to="/acceder"> Inicia Sesión</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

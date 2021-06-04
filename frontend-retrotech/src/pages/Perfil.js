import { useState, useEffect } from "react";
import { getUserInfo } from "../http/api";
import useAuth from "../shared/hooks/useAuth";
import "../assets/css/Perfil.css";
import { Link } from "react-router-dom";

import fotoPerfil from "../assets/images/usuario-perfil.png";
export default function Perfil() {
  const { signOut } = useAuth();

  const [perfilData, setPerfilData] = useState(null);
  const { userData } = useAuth();
  useEffect(() => {
    getUserInfo(userData.id).then((data) => {
      setPerfilData(data);
    });
  }, []);

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img src={fotoPerfil} className="foto-perfil-user" alt=""></img>
        <h1 className="title-perfil">¡Hola {perfilData?.userName}!</h1>
        <div className="btns-header-perfil">
          <button onClick={signOut} className="btn-cerrar-sesion">
            Cerrar Sesión
          </button>
          <button onClick={signOut} className="btn-cerrar-sesion">
            Editar usuario
          </button>
        </div>
      </div>

      <div className="info-usuario-perfil-container">
        <div className="info-perfil-usuario">
          <p className="info-usuario-perfil">
            <strong>Nombre: </strong> {perfilData?.nombre}
          </p>
          <p className="info-usuario-perfil">
            <strong>Apellidos: </strong> {perfilData?.apellidos}
          </p>
          <p className="info-usuario-perfil">
            <strong>Email: </strong> {perfilData?.email}
          </p>
          <p className="info-usuario-perfil">
            <strong>Ciudad: </strong> {perfilData?.ciudad}
          </p>
          <p className="info-usuario-perfil">
            <strong>País: </strong> {perfilData?.pais}
          </p>
          <p className="info-usuario-perfil">
            <strong>Fecha de Nacimiento: </strong> {perfilData?.fechaNacimiento}
          </p>
        </div>
        <div className="links-perfil-usuario">
          <Link to="/mis-anuncios">Mis Anuncios</Link>
          <Link to="/mis-solicitudes">Mis Solicitudes</Link>
          <Link to="/mis-reservas">Mis Reservas</Link>
        </div>
      </div>
    </div>
  );
}

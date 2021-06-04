import Perfil from "../../pages/Perfil";
import "../../assets/css/MisAnuncios.css";

import { useEffect, useState } from "react";
import { listarReservas } from "../../http/api";
import useAuth from "../../shared/hooks/useAuth";

export default function MisReservas() {
  const { userData } = useAuth();
  const [listaReservas, setListaReservas] = useState([]);
  useEffect(() => {
    listarReservas(userData.id).then((value) => {
      setListaReservas(value.anuncios);
    });
  }, [userData.id]);
  console.log(listaReservas);
  return (
    <>
      <Perfil></Perfil>
      <div className="misanuncios-container">
        <h1>Mis Reservas</h1>
      </div>
    </>
  );
}

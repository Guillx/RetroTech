import Perfil from "../../pages/Perfil";
import "../../assets/css/MisAnuncios.css";

import fotomisanuncios from "../../assets/images/nopicanuncio.jpg";
import { useEffect, useState } from "react";
import { listMyProducts, deleteAnuncio } from "../../http/api";
import useAuth from "../../shared/hooks/useAuth";

export default function MisAnuncios() {
  const { userData } = useAuth();
  const [listaAnuncio, setListaAnuncio] = useState([]);
  useEffect(() => {
    listMyProducts(userData.id).then((value) => {
      setListaAnuncio(value.anuncios);
    });
  }, [userData.id]);
  console.log(listaAnuncio);

  const onClick = async (idAnuncio) => {
    const response = await deleteAnuncio(idAnuncio);
    window.location.reload();
    console.log(response);
  };

  return (
    <>
      <Perfil></Perfil>
      <div className="misanuncios-container">
        <br></br>
        {listaAnuncio.map((value) => {
          return (
            <div className="anuncio-misanuncios" key={value.idAnuncio}>
              <img src={fotomisanuncios} alt=""></img>
              <div className="elements-misanuncios">
                <h1 className="titulo-anuncio-misanuncios">{value.titulo}</h1>
                <p className="descripcion-anuncio-misanuncios">
                  {value.descripcion}
                </p>
                <h4 className="precio-anuncio-misanuncios">{value.precio} €</h4>
                <div className="btns-misanuncios">
                  <button className="editar-anuncio-misanuncios">
                    <i class="far fa-edit"></i> Editar Anuncio
                  </button>
                  <button
                    onClick={() => onClick(value.idAnuncio)}
                    className="eliminar-anuncio-misanuncios"
                  >
                    <i class="fas fa-trash"></i> Eliminar Anuncio
                  </button>
                </div>
              </div>
              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
}

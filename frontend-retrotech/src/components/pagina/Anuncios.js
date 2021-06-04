import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "../../assets/css/Anuncios.css";
import fotoAnuncio from "../../assets/images/nopicanuncio.jpg";

export default function Anuncios() {
  const { idCategoria } = useParams();
  const [anunciosCategoria, setAnunciosCategoria] = useState([]);

  const [categoriaNombre, setCategoriaNombre] = useState([]);
  // [...document.getElementsByClassName("titulo-lista-anuncios")].forEach(
  //   function (e) {
  //     e.innerHTML = e.innerHTML.replace(/(.{1,20})(.*)/g, "$1...");
  //   }
  // );

  useEffect(() => {
    Axios.get(`http://localhost:4000/comprar/${idCategoria}`).then(
      (response) => {
        setAnunciosCategoria(response.data.data);
        console.log(anunciosCategoria);
      }
    );
  }, [idCategoria]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/comprar`).then((value) => {
      setCategoriaNombre(value.data);
    });
  }, []);
  console.log(categoriaNombre);

  return (
    <div className="body-anuncios">
      <h1 className="titulo-categorias-lista">Título estático</h1>
      <div className="barra-filtros"></div>
      {/* <div className="div-link">
        <Link to="/comprar" className="link-volver">
          <i class="fas fa-chevron-left"></i>Volver
        </Link>
      </div> */}

      <div className="body-cards">
        {/* <h1>Anuncios</h1> */}
        {anunciosCategoria.map((value) => {
          return (
            <div className="card-container">
              <Link
                className="card-link"
                key={value.idCategoria}
                to={`/comprar/${value.idCategoria}/${value.idAnuncio}`}
              >
                <div className="info-anuncio-min">
                  <p className="location-lista-anuncios">
                    <i class="fas fa-map-marker-alt"></i>
                    {value.localidad}, {value.provincia}
                  </p>
                  <img
                    src={fotoAnuncio}
                    className="foto-anuncio-min"
                    alt="foto-anuncio"
                  ></img>
                  <p className="precio-lista-anuncios">{value.precio} €</p>
                  <hr className="hr-anuncios"></hr>
                  <h1 className="titulo-lista-anuncios" key={value.idAnuncio}>
                    {value.titulo}
                  </h1>
                  <hr className="hr-anuncios"></hr>
                  <p className="descripcion-lista-anuncios">
                    {value.descripcion}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

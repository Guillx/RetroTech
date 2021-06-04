import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/css/QuieroComprar.css";
import { getCategoria } from "../../http/api";

import fotoConsolas from "../../assets/images/video-game.svg";
import fotoInformatica from "../../assets/images/computer.svg";
import fotoTelefonos from "../../assets/images/phone.svg";
import fotoTvVideo from "../../assets/images/tv.svg";
import fotoSonido from "../../assets/images/videotape.svg";
import Search from "../../pages/Search";

export default function QuieroComprar() {
  const [categoria, setCategoria] = useState([]);
  useEffect(() => {
    getCategoria().then((categoria) => {
      setCategoria(categoria.data);
    });
  }, []);
  return (
    <div className="quierocomprar-content">
      <div className="texto-header-categorias">
        <h2>Categorías</h2>
        <p>
          Selecciona una de las categorías disponibles y encuentra lo que estás
          buscando.
        </p>
      </div>

      <div className="categorias-container">
        <div className="categoria-card">
          <Link to="/comprar/1">
            <img
              src={fotoConsolas}
              className="foto-card-categoria"
              alt=""
            ></img>
            <h2>Consolas y Videojuegos</h2>
          </Link>
        </div>

        <div className="categoria-card">
          <Link to="/comprar/2">
            <img
              src={fotoInformatica}
              className="foto-card-categoria"
              alt=""
            ></img>
            <h2>Informática</h2>
          </Link>
        </div>

        <div className="categoria-card">
          <Link to="/comprar/3">
            <img
              src={fotoTelefonos}
              className="foto-card-categoria"
              alt=""
            ></img>
            <h2>Teléfonos</h2>
          </Link>
        </div>

        <div className="categoria-card">
          <Link to="/comprar/4">
            <img src={fotoTvVideo} className="foto-card-categoria" alt=""></img>
            <h2>TV y Vídeo</h2>
          </Link>
        </div>

        <div className="categoria-card">
          <Link to="/comprar/5">
            <img src={fotoSonido} className="foto-card-categoria" alt=""></img>
            <h2>Sonido</h2>
          </Link>
        </div>
      </div>

      {/* <div className="search-container">
        <h2>Utiliza el buscador para encontrar anuncios más fácilmente</h2>
        <input type="text" placeholder="buscar"></input>
      </div> */}
    </div>
  );
}

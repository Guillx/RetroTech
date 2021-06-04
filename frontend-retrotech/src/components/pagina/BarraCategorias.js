import { Link } from "react-router-dom";

import iconConsolas from "../../assets/images/chico-del-juego.svg";
import iconInformatica from "../../assets/images/computadora.svg";
import iconTelefono from "../../assets/images/telefono.svg";
import iconTelevision from "../../assets/images/television.svg";
import iconSonido from "../../assets/images/radio.svg";

import "../../assets/css/BarraCategorias.css";
export default function BarraCategorias() {
  return (
    <div className="container">
      <div className="categoria">
        <Link to="/comprar/1">
          <img src={iconConsolas} alt=""></img>
          <h4>Consolas y Videojuegos</h4>
        </Link>
      </div>

      <div className="categoria">
        <Link to="/comprar/2">
          <img src={iconInformatica} alt=""></img>
          <h4>Informática</h4>
        </Link>
      </div>

      <div className="categoria">
        <Link to="/comprar/3">
          <img src={iconTelefono} alt=""></img>
          <h4>Teléfonos</h4>
        </Link>
      </div>

      <div className="categoria">
        <Link to="/comprar/4">
          <img src={iconTelevision} alt=""></img>
          <h4>TV y Vídeo</h4>
        </Link>
      </div>

      <div className="categoria">
        <Link to="/comprar/5">
          <img src={iconSonido} alt=""></img>
          <h4>Sonido</h4>
        </Link>
      </div>
    </div>
  );
}

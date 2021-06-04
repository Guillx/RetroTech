import { Link } from "react-router-dom";
import "../../assets/css/MainIndex.css";
import Footer from "./Footer";

export default function MainIndex() {
  return (
    <div className="main-index-container">
      <div className="foto-index-container">
        <div className="header-foto-index">
          <h1 className="titulo-foto-index">El juego aún no ha terminado</h1>
          {/* <h2 className="subtitulo-foto-index">
            Compra y vende tecnología retro de segunda mano.
          </h2> */}
        </div>
        <div className="main-foto-index">
          <h3 className="texto-foto-index">
            En RetroTech podrás encontrar cientos de artículos relacionados con
            la tecnología retro.
          </h3>
          <h3 className="texto-foto-index">
            También puedes publicar tu propio anuncio y buscarle un nuevo hogar
            a esas cosas que ya no usas.
          </h3>
          <div className="links-foto-index">
            <Link to="/comprar" className="link-foto-index">
              Quiero comprar
            </Link>
            <Link to="/subir" className="link-foto-index">
              Quiero vender
            </Link>
          </div>
        </div>
        <div className="corteabajo"></div>
      </div>

      <div className="info-index">
        <h2 className="titulo-info-index">
          Dale una segunda vida a la tecnología retro
        </h2>

        <p className="texto-info-index">
          Seguro que a día de hoy aún conservas algún artículo de cuando eras
          niña/o. Esas cajas que tienes guardadas en el trastero o en el fondo
          del armario, ocupando espacio y que te llenan de recuerdos cada vez
          que haces limpieza y te tropiezas con ellas. <br></br>¿Crees que ha
          llegado la hora de deshacerte de ellas? No te preocupes si no funciona
          o si le falta algún cable o accesorio. Publica un par de fotos del
          artículo, añade unas frases para describir su estado y seguro que
          encuentras a alguien interesado en darle una segunda vida, ya sea para
          utilizarlo de forma activa o como artículo de decoración.
        </p>
      </div>
      <div className="texto-categorias-index-container">
        <div className="cortearriba"></div>
        <div className="texto-categorias-index">
          <h3>¿Qué encontrarás en RetroTech?</h3>
          <p>
            En RetroTech hay una pequeña pero completa variedad de artículos de
            tecnología retro. Entre ellos están las consolas y los videojuegos,
            artículos de informática, teléfonos, equipos de sonido, discos de
            vinilo, cassettes, televisiones, cintas VHS y mucho más.<br></br>{" "}
            Los artículos están ordenados en cinco
            <Link to="/comprar">
              <strong> categorías </strong>
            </Link>
            diferentes para que encuentres facilmente lo que estás buscando.
          </p>
        </div>
      </div>
      <Footer></Footer>

      {/* <h1>Consolas y Videojuegos</h1>
      <p>Texto consolas bla bla bla bla bla</p>

      <h1>Informática</h1>
      <p>Texto informática bla bla bla bla</p>
      
       */}
    </div>
  );
}

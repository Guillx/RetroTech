import { Link } from "react-router-dom";
import "../../assets/css/Header.css";
import useAuth from "../../shared/hooks/useAuth";

import logoSimple from "../../assets/images/logo-simple.png";

export default function Header() {
  const { isUserLogged } = useAuth();
  return (
    <>
      <header className="header">
        <div className="logo-header">
          <Link to="/">
            <img
              src={logoSimple}
              className="logo-header-img"
              alt="logotipo"
            ></img>
            <h2 className="brand-header">
              Retro<strong>Tech</strong>
            </h2>
          </Link>
        </div>
        {/* <div id="search" className="webdesigntuts-workshop">
          <form action="" method="">
            <input type="search" placeholder="Buscar..."></input>
            <button>Buscar</button>
          </form>
        </div> */}

        <nav className="nav-header">
          <ul className="ul-header">
            <li className="li-header" id="btn-subir">
              <Link to="/">
                <i className="fas fa-home"></i>
                Inicio
              </Link>
            </li>

            <li className="li-header" id="btn-subir">
              <Link to="/subir">
                <i className="fas fa-plus"></i>
                Subir
              </Link>
            </li>
            {isUserLogged ? (
              <li className="li-header" id="btn-perfil">
                <Link to="/perfil">
                  <i className="fas fa-user"></i>
                  Perfil
                </Link>
              </li>
            ) : (
              <li className="li-header" id="btn-acceder">
                <Link to="/acceder">
                  <i className="fas fa-user"></i>
                  Acceder
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

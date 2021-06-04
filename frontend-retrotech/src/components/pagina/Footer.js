import { Link } from "react-router-dom";
import "../../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container1">
        <ul className="ul-footer">
          <li className="li-footer">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li className="li-footer">
            <Link to="/nosotros">Sobre Nosotros</Link>
          </li>
          <li className="li-footer">
            <Link to="/retro-tech">Sobre RetroTech</Link>
          </li>
        </ul>
      </div>

      <div className="footer-container2">
        <a href="www.linkedin.com">
          <i class="fab fa-linkedin"></i>Guille
        </a>
        <a href="www.linkedin.com">
          <i class="fab fa-linkedin"></i>Christian
        </a>
      </div>
    </footer>
  );
}

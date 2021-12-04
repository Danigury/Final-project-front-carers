import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="menuToggle">
          <input className="hamburguer" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
            <li>
              <Link className="menu__item" to="#">
                agenda
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="#">
                mujer
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/location">
                localizaciones
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="location/create">
                crear localización
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="#">
                información práctica
              </Link>
            </li>

            <li>
              <Link className="menu__item" to="#">
                cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="logo">carers.</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;

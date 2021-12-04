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
              <Link className="menu__item" to="/location">
                localizaciones
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="registro">
                Registro
              </Link>
            </li>

            <li>
              <Link className="menu__item" to="registro">
                Registro
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

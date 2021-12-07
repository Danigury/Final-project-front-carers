import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const { logoutUser } = useUser();
  const navigate = useNavigate();
  const logout = async (event) => {
    event.preventDefault();
    logoutUser();
    navigate("/");
  };
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleNavbar = () => {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true);
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="menuToggle" onClick={toggleNavbar}>
          <input
            className="hamburguer"
            type="checkbox"
            checked={activeMenu}
            readOnly
          />
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
                organizaciones
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="location/create">
                crear organización
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="#">
                información práctica
              </Link>
            </li>

            <li>
              <Link className="menu__item" to="#" onClick={logout}>
                cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="logo" to="/location">
            carers.
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

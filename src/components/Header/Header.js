import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";
import "./Header.scss";
import { useState } from "react";
import useLocations from "../../hooks/useLocations";

const Header = () => {
  const { logoutUser } = useUser();
  const { resetCurrentLocation } = useLocations();
  const navigate = useNavigate();
  const resetLocation = (event) => {
    event.preventDefault();
    resetCurrentLocation();
    navigate("/location");
  };
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
              <Link
                className="menu__item"
                to="/location"
                onClick={resetLocation}
              >
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
              <a
                href="tel://+34900703030"
                to="#"
                className="emergency menu__item"
              >
                violencia de género
              </a>
            </li>
            <li>
              <a
                href="tel://+34936197311"
                className="emergency menu__item"
                to="#"
              >
                emergencias sociales
              </a>
            </li>

            <li>
              <Link className="logout menu__item" to="#" onClick={logout}>
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

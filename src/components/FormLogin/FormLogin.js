import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import "./FormLogin.scss";

const FormLogin = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [dataUser, setDataUser] = useState(initialUser);
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const changeUser = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/location");
    }
  });

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(dataUser);
  };

  return (
    <>
      <div className="form-container__login">
        <h2 className="login__title">Inicia sesión</h2>
        <form
          className="form-login"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <label htmlFor="username" className="label-login">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            type="text"
            id="username"
            className="form-login__input"
            value={dataUser.name}
            onChange={changeUser}
          />
          <label htmlFor="password" className="label-login">
            Contraseña
          </label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            value={dataUser.password}
            onChange={changeUser}
            className="form-login__input"
          />
          <button type="submit" className="button button-login">
            continúa
          </button>
          <button className="button-register" onClick={goToRegisterPage}>
            regístrate
          </button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;

import "./FormRegister.scss";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const FormRegister = () => {
  const initialUser = {
    username: "",
    password: "",
    admin: true,
    agenda: [],
  };

  const [dataUser, setDataUser] = useState(initialUser);
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const navigate = useNavigate();
  const { registerUser } = useUser();
  const [feedback, setFeedBack] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    registerUser(dataUser);
    if (isAuth) {
      setFeedBack(true);
    }
  };

  const changeUser = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/locations");
    }
  });

  return (
    <>
      {feedback === true ? (
        <p className="title">
          Bienvenida/o a carers. ya puedes utilizar la aplicación
        </p>
      ) : (
        <p className="title">Para utilizar carers. debes estar registrada/o.</p>
      )}

      <form
        className="form-register"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label htmlFor="username" className="labels">
          Introduce tu nombre
          <input
            type="text"
            id="username"
            placeholder="Nombre"
            name="username"
            className="form-register__input"
            required
            onChange={changeUser}
          ></input>
        </label>

        <label htmlFor="email" className="labels">
          Introduce tu email
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="password"
            className="form-register__input"
            onChange={changeUser}
          ></input>
        </label>

        <label htmlFor="password" className="labels">
          Introduce una contraseña
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            name="password"
            className="form-register__input"
            required
            onChange={changeUser}
          ></input>
        </label>
        <button type="submit" className="button-login">
          continúa
        </button>
      </form>
      <p className="registered-feedback"></p>
    </>
  );
};

export default FormRegister;

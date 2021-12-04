import "./FormRegister.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const FormRegister = () => {
  const initialDataUser = {
    username: "",
    password: "",
    admin: true,
    agenda: [],
  };

  const [dataUser, setDataUser] = useState(initialDataUser);

  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const navigate = useNavigate();
  const { registerUser } = useUser();
  const [feedback, setFeedBack] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    registerUser(dataUser);
    navigate("/login");
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
    </>
  );
};

export default FormRegister;

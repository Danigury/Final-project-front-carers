import "./FormRegister.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";

const FormRegister = () => {
  const initialDataUser = {
    username: "",
    password: "",
    admin: true,
    agenda: [],
  };

  const [dataUser, setDataUser] = useState(initialDataUser);

  const navigate = useNavigate();
  const { registerUser } = useUser();

  const onSubmit = async (event) => {
    event.preventDefault();
    registerUser(dataUser);
    navigate("/login");
  };

  const changeUser = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <div className="form-container">
        <h2 className="register__title">
          Para utilizar carers. debes estar registrada/o.
        </h2>
        <form
          className="form-register"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <label htmlFor="username" className="labels">
            Introduce tu nombre
          </label>
          <input
            type="text"
            id="username"
            placeholder="Nombre"
            name="username"
            className="form-register__input"
            required
            onChange={changeUser}
          ></input>
          <label htmlFor="password" className="labels">
            Introduce una contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            name="password"
            className="form-register__input"
            required
            onChange={changeUser}
          ></input>
          <button type="submit" className="button-login">
            continúa
          </button>
        </form>
      </div>
    </>
  );
};

export default FormRegister;

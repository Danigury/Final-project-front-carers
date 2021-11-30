import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

const Login = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [dataUser, setDataUser] = useState(initialUser);
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const { loginUser } = useUser();
  const navigate = useNavigate();

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
    <form
      className="form-login"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <label htmlFor="username" className="">
        Username
        <input
          placeholder="Username"
          type="text"
          id="username"
          className=""
          value={dataUser.name}
          onChange={changeUser}
        />
      </label>
      <label htmlFor="password" className="">
        Password
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={dataUser.password}
          onChange={changeUser}
          className=""
        />
      </label>
      <button type="submit" className="">
        Login
      </button>
    </form>
  );
};

export default Login;

import "./Home.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };
  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="main-container">
      <div className="main-container__green">
        <div className="main-container__buttons-home">
          <Button
            text="entrar"
            className="button-noline"
            actionOnClick={goToLoginPage}
          />
          <Button
            text="crear cuenta"
            className="button-line"
            actionOnClick={goToRegisterPage}
          />
        </div>
      </div>
      <div className="main-container main-container__text">
        <p className="text-home">
          “carers. nace de la creencia de que todas las personas merecen las
          mismas oportunidades.”
        </p>
      </div>
    </div>
  );
};

export default Home;

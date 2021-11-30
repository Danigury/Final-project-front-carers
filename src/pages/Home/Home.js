import "./Home.scss";
import Button from "../../components/Button/Button";

const Home = () => {
  const goToLoginPage = () => {};

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
            actionOnClick={() => {}}
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

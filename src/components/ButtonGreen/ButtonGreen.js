import "./ButtonGreen.scss";

const ButtonGreen = ({ text, className, actionOnClick }) => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default ButtonGreen;

import PropTypes from 'prop-types';
import "./Button.css";

const Button = ({ id, text, action }) => {
  const handleAction = (e) => {
    action(e);
  };

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
};


Button.propTypes = {
  id: PropTypes.string.isRequired, // Validando que a prop id é uma string e obrigatória
  text: PropTypes.string.isRequired, // Validando que a prop text é uma string e obrigatória
  action: PropTypes.func.isRequired, // Validando que a prop action é uma função e obrigatória
};

export default Button;

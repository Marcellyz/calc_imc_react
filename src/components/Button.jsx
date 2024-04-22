import PropTypes from 'prop-types';
import "./Button.css";

const Button = ({id, text}) => {
  return (
    <button id={id}>
      {text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired, // Validando que a prop id é uma string e obrigatória
  text: PropTypes.string.isRequired, // Validando que a prop text é uma string e obrigatória
 //action: PropTypes.func.isRequired, // Validando que a prop action é uma função e obrigatória
};

export default Button;

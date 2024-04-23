import { useState } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight]=useState("");
    const [weight, setWeight]=useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    };

    const   handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);
        setHeight(updatedValue);
    };

    const   handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);
        setWeight(updatedValue);
    };

    ImcCalc.propTypes = {
        calcImc: PropTypes.string.isRequired,
    }

  return (
    <div id="calc-container">
        <h2>Calculadora IMC</h2>
        <form id="imc-form">
            <div className="form-input">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input
                     type="text"
                     name="height" 
                     id="height" 
                     placeholder="Exemplo: 1,75"
                     onChange={(e) => handleHeightChange(e)} value={height} />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input
                     type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder="Exemplo: 60,0"
                    onChange={(e) => handleWeightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, weight, height)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc
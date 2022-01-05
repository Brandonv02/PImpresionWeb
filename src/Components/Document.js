import React from "react";
import PropTypes from "prop-types";
// import Swal from 'sweetalert2'
import './/Document.css';
import { useNavigate } from 'react-router-dom'

function Document({ imageSource, title, text, url }) {

const navigate = useNavigate();

  const HomeTD = () => {
    navigate("/KeyPad")
  }

  return (
    <div className="cardT text-center animate__animated ">

      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : ""}
        </p>
        <button
        type="button"
        className="btn btn-primary  "
        onClick={ HomeTD }>
        <b>Siguiente</b>
        </button>
      </div>
    </div>
  );
}

Document.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export {Document};


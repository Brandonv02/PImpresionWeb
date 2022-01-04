import React from "react";
import PropTypes from "prop-types";
import Swal from 'sweetalert2'
import './/Card.css';

function Card({ imageSource, title, text, url }) {
  const modal = () => {
    Swal.fire({
      icon: 'success',
      title: 'Espere',
      text: 'Generando el turno',
    })
  }

  return (
    <div className="card text-center animate__animated ">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
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
        onClick={ modal }>
        <b>Pedir turno</b>
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;

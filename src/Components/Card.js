import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux'

import PropTypes from "prop-types";
import Swal from 'sweetalert2'
import './/Card.css';

function Card({ imageSource, title, text }) {

  const [turn, setTurn] = useState([]);

  var sendingInformation = new FormData();

  sendingInformation.append("idGroup", 12);
  sendingInformation.append("strHeadquarterCode", 1);
  sendingInformation.append("strIdentification", useSelector((state) => state.turnInformation.strIdentification));

    useEffect(() => {
        
      }, [setTurn]);

  const modal = () => {
    Axios({
      method: 'post',
      url: 'https://localhost:44358/api/Turn/GenerateFaceToFaceTurn',
      data: sendingInformation,
      config: { headers: {
          "Content-Type": "application/json charset=utf8" 
        }}
      })
        .then((response) => {
        setTurn(response.data);
        console.log(sendingInformation);
        Swal.fire({
          icon: 'success',
          title: 'Turno generado',
          text: "Su turno es:  " + response.data.nroTurno
        })
      })
        .catch((error) => {
          console.log(error);
        });
    
        
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

  imageSource: PropTypes.string
};

export default Card;

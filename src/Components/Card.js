import React, { useState, useEffect } from "react";
import Axios from "axios";

import PropTypes from "prop-types";
import Swal from 'sweetalert2'
import './/Card.css';

function Card({ imageSource, title, text, url }) {

  const [turn, setTurn] = useState([]);

    const data = {
        "idGroup": 12,
        "strHeadquarterCode": 1,
        "strIdentification": "11121114201"
    }

    useEffect(() => {
        
      }, [setTurn]);

  const modal = () => {
    
    Axios({
      method: 'post',
      url: 'https://localhost:44358/api/Turn/GenerateFaceToFaceTurn',
      data: JSON.stringify(data),
      config: { headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }}
      })
        .then((response) => {
        setTurn(response.data.idTurno);
      })
        .catch((error) => {
          console.log(error);
        });
    
    let timerInterval
      Swal.fire({
        title: turn.idTurno,
        html: 'Por favor espera :).',
        timer: 7000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
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

  imageSource: PropTypes.string
};

export default Card;

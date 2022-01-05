import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";

import image1 from '../Img/AtenPrio.jpg'
import image2 from '../Img/AtenGene.jpg'
import image3 from '../Img/Atencion.jpg'
import { Fragment } from "react/cjs/react.production.min";


function Cards() {

    const [cards, setCards] = useState([]);
    /*const IdHeadquarter = 5;*/

    useEffect(() => {
        Axios.post(
            "https://localhost:44358/api/Turn/GetAllAvailableGroupsByHeadquarter?IdHeadquarter=1",
            
        )
        .then((response) => {
            setCards(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [setCards]);


    return (
        <Fragment>
            <div className="container-cards">
                <div class="alert alert-success title" role="alert">
                    ELIJE EL TIPO DE ATENCION QUE DESEAS
                </div>
                <div className="container d-flex justify-content-center align-items-center h-20">
                <div className="row">
                    {cards.map(( item ) => (
                    <div className="col-md-4 cartas" key={item.idGrupoP}>
                        <Card title={item.strNombreGrupo} imageSource={image1} />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export {Cards};

import React from "react";
import Card from "./Card";
import image1 from '../Img/AtenPrio.jpg';
import image2 from '../Img/AtenGene.jpg';
import image3 from '../Img/Atencion.jpg';
import { Fragment } from "react/cjs/react.production.min";

const cards = [
    {
        id: 1,
        title: "ATENCION PRIORITARIA",
        image: image1,
        
    },
    {
        id: 2,
        title: "ATENCION GENERAL",
        image: image2,
    },
    {
        id: 3,
        title: "ATENCION GENERAL",
        image: image3,
    },
];

function Cards() {
    return (
        <Fragment>
            <div className="container-cards">
                <div class="alert alert-success title" role="alert">
                    ELIJE EL TIPO DE ATENCION QUE DESEAS
                </div>
                <div className="container d-flex justify-content-center align-items-center h-20">
                <div className="row">
                    {cards.map(({ title, image, url, id }) => (
                    <div className="col-md-4 cartas" key={id}>
                        <Card imageSource={image} title={title} url={url} />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export {Cards};

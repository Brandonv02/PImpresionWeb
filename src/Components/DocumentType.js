import React from "react";
import image1 from '../Img/AtenPrio.jpg';
import image2 from '../Img/AtenGene.jpg';
import image3 from '../Img/Atencion.jpg';
import { Fragment } from "react/cjs/react.production.min";
import { Document } from "./Document";

const documentType = [
    {
        id: 1,
        title: "CEDULA DE CIUDADANIA",
        image: image1,
    },
    {
        id: 2,
        title: "TARJETA DE IDENTIDAD",
        image: image2,
    },
    {
        id: 3,
        title: "CEDULA DE CIUDADANIA",
        image: image3,
    },
];

function DocumentType() {
    return (
        <Fragment>
            <div className="container-cards">
                <div class="alert alert-success titleT" role="alert">
                    ELIJE EL TIPO DE DOCUMENTO
                </div>
                <div className="container d-flex justify-content-center align-items-center ">
                <div className="row">
                    {documentType.map(({ title, id }) => (
                    <div className="col-md-4 cartasT" key={id}>
                        <Document  title={title} />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export {DocumentType};

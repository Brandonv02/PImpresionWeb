import React, { useState, useEffect } from "react";
import Axios from "axios";
import image1 from '../Img/AtenPrio.jpg';
import image2 from '../Img/AtenGene.jpg';
import image3 from '../Img/Atencion.jpg';
import { Fragment } from "react/cjs/react.production.min";
import { Document } from "./Document";

function DocumentType() {

    const [documentTypes, setDocumentTypes] = useState([]);
    /*const IdHeadquarter = 5;*/

    useEffect(() => {
        Axios.get(
            "https://localhost:44358/api/Turn/GetAllDocumentsType",
            
        )
        .then((response) => {
            setDocumentTypes(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [setDocumentTypes]);

    return (
        <Fragment>
            <div className="container-cards">
                <div className="alert alert-success titleT" role="alert">
                    ELIJE EL TIPO DE DOCUMENTO
                </div>
                <div className="container d-flex justify-content-center align-items-center ">
                <div className="row">
                    {documentTypes.map((item) => (
                    <div className="col-md-4 cartasT" key={item.idDocumento}>
                        <Document  title={item.nombre} abbreviation={item.codigo}/>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export {DocumentType};

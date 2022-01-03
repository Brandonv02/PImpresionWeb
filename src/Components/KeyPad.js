import React, { Fragment, useState } from 'react'
import './KeyPad.css';
import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
import Fondo from '../Img/fondo5.png'



export default function KeyPad() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Cards');
}
  // const maxLengthCheck = (object) => {
  //   if (object.target.value.length > object.target.maxLength) {
  //   object.target.value = object.target.value.slice(0, object.target.maxLength)
  //     }
  //   }

  const [prueba, setPrueba] = useState("");
  const [cedula ] = useState({campo: '', valido: null});

  return (
    <Fragment >

      <div className="fondo">
        <img src={Fondo} alt="fondo" className="fondo-img"/>
      </div>
      <div className="Key">
        
        <div className='Inputt'>
        <div className='Tittle'>
          <h1 className='tittle-text'>Ingrese su cedula</h1>
        </div>

          <input
            estado={cedula}
            placeholder="Numero de cedula"
            id="keyInput"
            type="number"
            // maxlength="10"
            // onInput={this.maxLengthCheck}
            value={prueba}
            autoComplete="off"
            onChange={() => false}
          />
        </div>

        <div className='Keypad'>
          <div className='Button'>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              1
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              2
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              3
            </button>
          </div>

          <div className='Button'>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              4
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              5
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              6
            </button>
          </div>

          <div className='Button'>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              7
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              8
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              9
            </button>
          </div>

          <div className='Button'>
            <button className="KeyPad_Button btn-danger" type='button' onClick={() => setPrueba(prueba.slice(0, -1))}>
              Borrar
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              0
            </button>
            <button className="KeyPad_Button btn-success" type='button' onClick={ handleClick }>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { KeyPad };
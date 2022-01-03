import React, { Fragment, useState } from 'react'
import './KeyPad.css';
import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

export default function KeyPad() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Cards');
}

  const [prueba, setPrueba] = useState("")

  return (
    <Fragment >
      <div className="Key">
        <div className='Tittle'>
          <h1 className='tittle-text'>Ingrese su cedula</h1>
        </div>

        <div className='Inputt'>
          <input
          id="keyInput"
          type="text"
          value={prueba}
          autoComplete="off"
          onChange={() => false}
          required
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
            <button className="KeyPad_Button" type='button' onClick={() => setPrueba(prueba.slice(0, -1))}>
              Borrar
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => setPrueba(`${prueba}${e.target.innerHTML}`)}>
              0
            </button>
            <button className="KeyPad_Button" type='button' onClick={ handleClick }>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { KeyPad };
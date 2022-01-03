import React, { Fragment, useState } from 'react'
import './KeyPad.css';
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
import Fondo from '../Img/fondo5.png'



 function KeyPad() {

  // const navigate = useNavigate();

 
  // const maxLengthCheck = (object) => {
  //   if (object.target.value.length > object.target.maxLength) {
  //   object.target.value = object.target.value.slice(0, object.target.maxLength)
  //     }
  //   }

  const [prueba, setPrueba] = useState("");

  const onHandleClick = (number) =>  {
    if(prueba.length < 10) {
        setPrueba(`${prueba}${number}`)
        onHandleClick(10)
        }
      }
      
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
            // estado={cedula}
            placeholder="Numero de cedula"
            id="keyInput"
            type="number"
            maxlength="10"
            // onInput={this.maxLengthCheck}
            value={prueba}
            autoComplete="off"
            onChange={() => false}
          />
        </div>

        <div className='Keypad'>
          <div className='Button'>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(1)}>
              1
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(2)}>
              2
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(3)}>
              3
            </button>
          </div>

          <div className='Button'>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(4)}>
              4
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(5)}>
              5
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(6)}>
              6
            </button>
          </div>

          <div className='Button'>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(7)}>
              7
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(8)}>
              8
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(9)}>
              9
            </button>
          </div>

          <div className='Button'>
            <button className="KeyPad_Button btn-danger" type='button' onClick={() => setPrueba(prueba.slice(0, -1))}>
              Borrar
            </button>
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(9)}>
              0
            </button>
            <button className="KeyPad_Button btn-success" type='button' >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </Fragment>
     );
    }
  


  export { KeyPad };
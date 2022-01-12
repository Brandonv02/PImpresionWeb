import React, { Fragment, useState } from 'react'
import './KeyPad.css';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Fondo from '../Img/fondo5.png'

import { useSelector, useDispatch } from 'react-redux'
import { changeTurnIdentification } from '../Features/Counter/counterSlice'


function KeyPad() {

  var [prueba, setPrueba] = useState("");

  //var y = useSelector((state) => state.turnInformation.strIdentification)
  const dispatch = useDispatch()

  const navigate = useNavigate();

      const onHandleClick = (number) =>  {
        if(prueba.length < 15) {
            setPrueba(`${prueba}${number}`)
            } else {
              Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Max de números permitidos',
              })
            }
      }

      const HandleClick = () => {
        if (prueba.length < 5 || prueba.length === 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Número no valido',
          })
          
          }if (prueba.length >= 5) {
            dispatch(changeTurnIdentification(prueba));
            //console.log(y.state.strIdentification);
            navigate("/Cards")
          }
      }

      function changeState(){
        return 
      }

  return (
    <Fragment >

      <div className="fondo">
        <img src={Fondo} alt="fondo" className="fondo-img"/>
      </div>
      <div className="Key">
        
        <div className='Inputt'>
          <div className='Tittle'>
            <h1 className='tittle-text'>Ingrese su numero</h1>
          </div>
            <input
              // estado={cedula}
              className="Keyinput"
              placeholder="Numero de identificacion"
              id="keyInput"
              type="text"
              maxLength="10"
              // onInput={this.maxLengthCheck}
              value={prueba}
              autoComplete="off"
              onChange={() => false}
              required
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
            <button className="KeyPad_Button" type='button' onClick={(e) => onHandleClick(0)}>
              0
            </button>
            <button className="KeyPad_Button btn-success" type='button' onClick={HandleClick}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </Fragment>
     );
    }
  


  export { KeyPad };
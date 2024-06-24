import React from "react";
import {useRef} from 'react';
import "../estilos/bienvenida.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faPlay } from "@fortawesome/free-solid-svg-icons";
import TareaIcon from '../imagenes/tarea-icon.png'


function Biendvenida({handleComenzar}) {

  const headerRef = useRef(null) 
  const footerRef = useRef(null)

  function handleClick() {
    headerRef.current.classList.add('header__bienvenida-oculto');
    footerRef.current.classList.add('footer__bienvenida-oculto')
    handleComenzar()
  }

  return(
    <section className="seccion__bienvenida">
    
      <header className="header__bienvenida" ref={headerRef}>
          <div className="icono__bienvenida">
            <p>S</p>
          </div>
          <div className="container-titulo__bienvenida">
            <div className="container-imagen__bienvenida">
              <img
                src={TareaIcon}
                alt=""
                className="imagen__bienvenida"
              />
            </div>
            <div>
              <h1>CUESTIONARIO SOBRE <br/> CALISTENIA</h1>
              <p className="text-test__bienvenida">Test</p>
            </div>
            
          </div>
      </header>
      <footer className="footer__bienvenida" ref={footerRef}>
        <div className="container-icon-enlace__bienvenida">
            <FontAwesomeIcon
              icon={faUser}
              className="icono-user__bienvenida"
            />
            <a href="#" className="enlace-form__bienvenida">Pulse aqui para identificarse</a>
        </div>
        <button className="boton__bienvenida" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faPlay}
              className="icono-play__bienvenida"
            />
          <p>Comenzar</p>
        </button>
      </footer>
    </section>
  )
}

export default Biendvenida
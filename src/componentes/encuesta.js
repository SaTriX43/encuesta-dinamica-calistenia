import React, { useRef, useState } from "react";
import '../estilos/encuesta.css';
import Preguntas from "./preguntas-encuesta";
import Opciones from "./opciones-encuesta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Encuesta({valor}) {

  const primeraPregunta = useRef(true)
  const [isSelected , setIsSelected] = useState(null)


  const  handleLiteral = (literal) => {
    setIsSelected(literal)
  }


  function clickPrevia() {
    console.log('click en previa')
  }

  function clickSiguiente() {
    console.log('click en siguiente')
  }

  function clickEntregar() {
    console.log("Has entregado la encuesta")
  }



  return (
    <section className={`seccion__encuesta ${valor ? 'seccion__encuesta-visible' : ''}`}>
      {/* header  */}
      <header className="header__encuesta">
        <h1>CUESTIONARIO SOBRE CALISTENIA</h1>
        <div className="container-puntos__encuesta">
          <p>PUNTOS</p>
          <div className="puntos__encuesta">
            <p>e</p>
            <p>0</p>
            {/* <p>{puntos}</p> */}
          </div>
        </div>
      </header>

      {/* Main  */}
      <main className="main__encuesta">

        {/* seccion de preguntas  */}
        <Preguntas
          className={`pregunta-activo`}
          pregunta='Que es la Calistenia?'
        />
        <Preguntas
          className={`pregunta-oculto`}
          pregunta='Selecciones un ejercicio basico de calistenia'
        />
        <Preguntas
          className={`pregunta-oculto`}
          pregunta='Que se desarrolla medida que ralizamos calistenia?'
        />

        {/* seccion de opciones  */}
        <section className="seccion-opciones__encuesta">

          <div className="primera-pregunta__encuesta pregunta-activa" ref={primeraPregunta}>
            <Opciones
              claseLiteral={`literal-a`}
              literal='A'
              texto='Sedentarismo'
              primeraPregunta={primeraPregunta}
              isSelected = {isSelected === 'A'}
              handleLiteral = {handleLiteral}
            />
            <Opciones
              claseLiteral={`literal-b`}
              literal='B'
              texto='Conjusto de ejercicios que centran su interes en los movimientos de grupos musculares'
              primeraPregunta={primeraPregunta}
              isSelected = {isSelected === 'B'}
              handleLiteral = {handleLiteral}
            />
            <Opciones
              claseLiteral={`literal-c`}
              literal='C'
              texto='Movimientos circulares'
              primeraPregunta={primeraPregunta}
              isSelected = {isSelected === 'C'}
              handleLiteral = {handleLiteral}
            />
            <Opciones
              claseLiteral={`literal-d`}
              literal='D'
              texto='Conjunto de ejercicios que mide la fuerza y la agilidad para tener una media de nuestras capacidades motrices'
              primeraPregunta={primeraPregunta}
              isSelected = {isSelected === 'D'}
              handleLiteral = {handleLiteral}
            />
          </div>
          
          <div className="segunda-pregunta__encuesta pregunta-desactiva">
            <Opciones
              claseLiteral={`literal-a`}
              literal='A'
              texto='Levantar pesas'
            />
            <Opciones
              claseLiteral={`literal-b`}
              literal='B'
              texto='Abrazos'
            />
            <Opciones
              claseLiteral={`literal-c`}
              literal='C'
              texto='Sedentarismo'
            />
            <Opciones
              claseLiteral={`literal-d`}
              literal='D'
              texto='Push-ups'
            />
          </div>

          <div className="tercera-pregunta__encuesta pregunta-desactiva">
            <Opciones
              claseLiteral={`literal-a`}
              literal='A'
              texto='Fuerza y levitacion'
            />
            <Opciones
              claseLiteral={`literal-b`}
              literal='B'
              texto='Agilidad y fuerza'
            />
            <Opciones
              claseLiteral={`literal-c`}
              literal='C'
              texto='No sirve para nada'
            />
            <Opciones
              claseLiteral={`literal-d`}
              literal='D'
              texto='Un tercer brazo'
            />
          </div>

        </section>

      </main>

      {/* footer  */}
      <footer className="footer__encuesta">
        <div className="container-timer__encuesta">
          <p className="timer__encuesta">10:00</p>
        </div>

        <div className="botones__encuesta previa" onClick={clickPrevia}>
          <p>{'< Previa'}</p>
        </div>
        <div className="botones__encuesta siguiente" onClick={clickSiguiente}>
          <p>{'> Siguiente'}</p>
        </div>

        <div className="boton-entregar__encuesta" onClick={clickEntregar}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="icono-boton-entregar__encuesta"
          />
          <p>Entregar</p>
        </div>
      </footer>
    </section>
  );
}

export default Encuesta;

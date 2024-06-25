//importamos 
import React, {  useRef, useState } from "react";
import '../estilos/encuesta.css';
import Preguntas from "./preguntas-encuesta";
import Opciones from "./opciones-encuesta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Resultado from "./resultado";

// Datos de las preguntas y opciones
const questionData = [
  //primera pregunta con sus respuestas
  {
    question: '¿Qué es la Calistenia?',
    options: [
      { literal: 'A', text: 'Sedentarismo' },
      { literal: 'B', text: 'Conjunto de ejercicios que centran su interés en los movimientos de grupos musculares' },
      { literal: 'C', text: 'Movimientos circulares' },
      { literal: 'D', text: 'Conjunto de ejercicios que mide la fuerza y la agilidad para tener una media de nuestras capacidades motrices' }
    ],
    respuestaCorrecta:'B'
  },
  //segunda pregunta con sus respuestas
  {
    question: 'Selecciona un ejercicio básico de calistenia',
    options: [
      { literal: 'A', text: 'Levantar pesas' },
      { literal: 'B', text: 'Abrazos' },
      { literal: 'C', text: 'Sedentarismo' },
      { literal: 'D', text: 'Push-ups' }
    ],
    respuestaCorrecta:'D'
  },
  //tercera pregunta con sus respuestas
  {
    question: '¿Qué se desarrolla a medida que realizamos calistenia?',
    options: [
      { literal: 'A', text: 'Fuerza y levitación' },
      { literal: 'B', text: 'Agilidad y fuerza' },
      { literal: 'C', text: 'No sirve para nada' },
      { literal: 'D', text: 'Un tercer brazo' }
    ],
    respuestaCorrecta:'B'
  }
];

function Encuesta({ valor }) {//prop valor
  //creamos variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //variable que guarda el indice-numero
  const [selectedOptions, setSelectedOptions] = useState({});//variable que guarda el valor de las opciones
  const[resultadoMensaje , setResultadoMensaje] = useState('');//mensaje de resultado 

  // Apartado de resultados 
  const [mostrarSeccionResultado , setMostrarResultadoEncuesta] = useState(false);//para mostrar la seccion de resultados
  const [puntos , setPuntos] = useState(0);//para los puntos
  const [aciertos , setAciertos] = useState(0);//para los aciertos
  
  const currentQuestion = questionData[currentQuestionIndex];//variable que es la pregunta dependiendo de el indice-numero
  


  // funcion handleLiteral que recibe literal parametro
  const handleLiteral = (literal) => {
    // actualiza el valor de selectedOptions e itera
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIndex]: literal
    }));
  };

  // Funcion para retroceder 
  const clickPrevia = () => {
    setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
  };

  // funcion para avanzar 
  const clickSiguiente = () => {
    setCurrentQuestionIndex(prev => Math.min(prev + 1, questionData.length - 1));
  };

  // Funcion de botn de entregar 
  const clickEntregar = () => {
    //si la longitud de selectOptions es menor a questionData entonces
    if(Object.keys(selectedOptions).length < questionData.length) {
      alert('Porfavor seleccionar todas las respuestas')
      return false
    }

    // ejecuta en 1 segundo 
    setTimeout(()=> {
      setMostrarResultadoEncuesta(true);//transforma a true para mostrar la seccion-resultados
      document.body.classList.add('body-scrollbar');//agrega la clase body-scroolbar al body
    },1000)
    
    // definimos variable respuestaCorrecta
    let respuestaCorrecta = 0;

    // iteramos sobre questionData 
    questionData.forEach((pregunta, index)=> {
        // si selectedOptions[indice] si es igual a pregunta.respuestaCorresta entonces
        if(selectedOptions[index] === pregunta.respuestaCorrecta) {
          respuestaCorrecta++//aumentale el numero
        }
    })

    // si respuestaCorrecta es igual a la longitud de questionData entonces
    if(respuestaCorrecta === questionData.length) {
      setResultadoMensaje('Has ganado')
      setPuntos('100.000')
      setAciertos('3/3')
    }//y si es iguala a longitud (questionData -1) entonces
    else if(respuestaCorrecta === (questionData.length - 1)) {
      setResultadoMensaje('!conseguido!')
      setPuntos('66.667')
      setAciertos('2/3')
    }else {
      setResultadoMensaje('Game Over')
      setPuntos('33.333')
      setAciertos('1/3')
    }
    
    
    
  };

  return (
    <section className={`seccion__encuesta ${valor ? 'seccion__encuesta-visible' : ''}`}>
      <header className="header__encuesta">
        <h1>CUESTIONARIO SOBRE CALISTENIA</h1>
        <div className="container-puntos__encuesta">
          <p>PUNTOS</p>
          <div className="puntos__encuesta">
            <p>e</p>
            <p>{puntos}</p>
          </div>
        </div>
      </header>

      <main className="main__encuesta">
        {/*Crea componente <Pregunta/>
          prop:
          pregunta = v(currentQuestion.question)
        */}
        <Preguntas pregunta={currentQuestion.question}/>

        <section className="seccion-opciones__encuesta">
          <div className="pregunta__encuesta">

            {/*Itera sobre currentQuestion.options
              crea un componente <Opciones/> por cada vuelta
              props:
              Key = option.literal 'Agarra el literal'
              claseLiteral = clase y lo transforma en minuscilas el 'litearl'
              literal = 'literal'
              texto = option.text
            */}
            {currentQuestion.options.map(option => (
              <Opciones
                key={option.literal}
                claseLiteral={`literal-${option.literal.toLowerCase()}`}
                literal={option.literal}
                texto={option.text}
                isSelected={selectedOptions[currentQuestionIndex] === option.literal}
                handleLiteral={handleLiteral}
              />
            ))}
          </div>
          
        </section>
      </main>

      <footer className="footer__encuesta">
        <div className="botones__encuesta previa" onClick={clickPrevia}>{/*llama a la funcion clickPrevia()*/}
          <p>{'< Previa'}</p>
        </div>
        <div className="botones__encuesta siguiente" onClick={clickSiguiente}>{/*llama a la funcion clickSiguiente()*/}
          <p>{'> Siguiente'}</p>
        </div>
        <div className="boton-entregar__encuesta" onClick={clickEntregar}>{/*llama a la funcion clickEntregar()*/}
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="icono-boton-entregar__encuesta"
          />
          <p>Entregar</p>
        </div>
      </footer>
      {/*Componente Resultado
        props:
        resultado = v(resultadoMensaje)
        mostrar = f(mostrarSeccionResultado)
        puntos = v(puntos)
        aciertos = v(aciertos)
      */}
      <Resultado
        resultado = {resultadoMensaje}
        mostrar = {mostrarSeccionResultado}
        puntos={puntos}
        aciertos = {aciertos}
      />
    </section>
  );
}

export default Encuesta;

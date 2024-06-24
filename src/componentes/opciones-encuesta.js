import React from "react";
import '../estilos/opciones-encuesta.css'

function Opciones({literal, texto , claseLiteral , primeraPregunta ,isSelected , handleLiteral }) {

  function clickOpcion(e) {
    e.stopPropagation()
    handleLiteral(literal)
  }

  return(
    <div className={`opcion__encuesta ${claseLiteral} ${isSelected ? `selected literal-${literal}` : ''}`} onClick={clickOpcion}>
      <div className={`literal-opciones__encuesta ${literal}`}>
        <p>{literal}</p>
        <input type="checkbox" className={`input-opciones__encuesta ${primeraPregunta ? 'input-opciones__encuesta-oculto' : ''}`}/>
      </div>
      <p className="texto-opciones__encuesta">{texto}</p>
    </div>
  )
}

export default Opciones
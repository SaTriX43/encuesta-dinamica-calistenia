// importamos 
import React from "react";
import '../estilos/opciones-encuesta.css';

function Opciones({ literal, texto, claseLiteral, isSelected, handleLiteral }) {
  //funcion click 
  function clickOpcion(e) {
    e.stopPropagation();//detiene la propagacion
    handleLiteral(literal);//maneja la funcion(handleLitearl())
  }

  return (                             
    <div className={`opcion__encuesta ${claseLiteral} ${isSelected ? `selected literal-${literal}` : ''}`} onClick={clickOpcion}>
      <div className={`literal-opciones__encuesta ${literal}`}>
        <p>{literal}</p>
        <input type="checkbox" className={`input-opciones__encuesta`} checked={isSelected} readOnly />
      </div>
      <p className="texto-opciones__encuesta">{texto}</p>
    </div>
  );
}

export default Opciones;

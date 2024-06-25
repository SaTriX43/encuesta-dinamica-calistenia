import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../estilos/resultado.css'


function Resultado({resultado , puntos , tiempo , aciertos , mostrar }) {

  function reiniciarPagina() {
    console.log('reiniciando pagina')
    window.location.reload()
  }

  return(
    <section className={`seccion-resultado ${mostrar ? 'seccion-resultado-mostrar' : ''}`}>
      <div className="encabezado-resultado">
        <h1>{resultado}</h1>
        <hr/>
        <div className="container-puntos__resultado">
          <p className="text-puntos-resultado">PUNTOS</p>
          <p>{puntos}</p>
        </div>
      </div>

      <div className="main-resultado">
        <button className="boton-reintentar__resultado" onClick={reiniciarPagina}>
          <FontAwesomeIcon
            icon={faRotateRight}
          />
          <p>Reintentar</p>
        </button>

        <div className="compartir-resultado">
          <p>Compartir</p>
        </div>


        <div className="tabla__resultado">
          <div className="tabla-items__resultados tabla-puntos__resultado">
            <p>PUNTOS</p>
            <p>{puntos}</p>
          </div>
          
          <div className="tabla-items__resultados tabla-aciertos__resultado">
            <p>ACIERTOS</p>
            <p>{aciertos}</p>
          </div>
        </div>
        <button className="boton-mostrar__resultados">Resultados</button>
      </div>
    </section>
  )
}


export default Resultado
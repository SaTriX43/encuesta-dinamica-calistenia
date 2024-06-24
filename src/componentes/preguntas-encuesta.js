import '../estilos/preguntas-encuesta.css'

function Preguntas({className, pregunta}) {

  return(
    <section 
      className={`seccion-pregunta__encuesta ${className}`}
    >
       <h3>{pregunta}</h3>
    </section>
  )
}


export default Preguntas
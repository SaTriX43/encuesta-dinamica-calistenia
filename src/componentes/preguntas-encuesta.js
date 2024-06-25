import '../estilos/preguntas-encuesta.css'

function Preguntas({pregunta}) {

  return(
    <section 
      className={`seccion-pregunta__encuesta`}
    >
       <h3>{pregunta}</h3>
    </section>
  )
}


export default Preguntas
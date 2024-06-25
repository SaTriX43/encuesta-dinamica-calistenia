// importamos 
import React, { useEffect, useState } from "react";
import '../estilos/loader.css'

function Loader() {
  // definimos variable 
  const [contador, setContador] = useState(3)

  // creamos un useEffect que se ejecute cuanto el loder carge
  useEffect(()=> {
    //definimos variable interval con valor de un intervalo de 1s
    const interval = setInterval(() => {
      // actualiza el contador y le resta hasta llegar a 0 
      setContador(prevContador => (prevContador > 0 ? prevContador - 1 : 0))
    }, 1000);

    //limpia el intevalo
    return () => clearInterval(interval);
  },[])

  return(
    <div className="contenedor-principal__loader">
      <div className={`container__loader ${contador > 0 ? 'spin' : ''}`} >
        <p className="contador">{contador}</p>
      </div>
    </div>
  )
}

export default Loader
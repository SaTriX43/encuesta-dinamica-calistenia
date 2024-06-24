import React, { useEffect, useState } from "react";
import '../estilos/loader.css'

function Loader() {

  const [contador, setContador] = useState(3)

  useEffect(()=> {
    const interval = setInterval(() => {
      setContador(prevContador => (prevContador > 0 ? prevContador - 1 : 0))
    }, 1000);

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
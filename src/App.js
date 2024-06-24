import { useState } from 'react';
import './App.css';
import Biendvenida from './componentes/bienvenida';
import Loader from './componentes/loader';
import Encuesta from './componentes/encuesta';


function App() {

  const [loader, setLoader] = useState(false)
  const [mostrarEncuesta , setMostrarEncuesta] = useState(false)

  
  const comenzar = () => {

    setTimeout(()=> {
      setLoader(true)
      setTimeout(()=> {
        setLoader(false)
        setMostrarEncuesta(true)
      },3000)
    },1000)
    
  }

  return (
    <div className="App">
      <div className="fondo"></div>
      <Biendvenida
        handleComenzar={comenzar}
      />
      
      {loader && <Loader />}

      <Encuesta
        valor = {mostrarEncuesta}
      />
    </div>
  );
}

export default App;

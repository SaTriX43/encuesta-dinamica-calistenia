//importamos 
import { useState } from 'react';
import './App.css';
import Biendvenida from './componentes/bienvenida';
import Loader from './componentes/loader';
import Encuesta from './componentes/encuesta';


function App() {
  //definimos variables
  const [loader, setLoader] = useState(false);
  const [mostrarEncuesta , setMostrarEncuesta] = useState(false);

  //funcion comenzar
  const comenzar = () => {
    //timer de 1s
    setTimeout(()=> {
      setLoader(true);//lo pasa a true
      //timer de 3s
      setTimeout(()=> {
        setLoader(false)//lo pasa a false
        setMostrarEncuesta(true)//lo pasa a true
      },3000)
    },1000)
    
  }

  return (
    <div className="App">
      <div className="fondo"></div>{/*Fondo*/}

      {/*Componente <Bienvenida/>
        props:
        handleComenzar = f(comenzar)
      */}
      <Biendvenida handleComenzar={comenzar}/> 
      
      {/*Si loader es true entonces
        componente <Loader/>
      */}
      {loader && <Loader />}

      {/*Componente <Encuesta/>
        props:
        valor = v(mostrarEncuesta)
      */}
      <Encuesta valor = {mostrarEncuesta}/>
    </div>
  );
}

export default App;

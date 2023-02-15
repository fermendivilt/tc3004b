import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component';

function App() {

  const ahoraI2 = [5,4,3,2];
  const ahoraI = [...ahoraI2, 1,2,3,4];
  const ahoraI3 = {nombre:'Fernando', apellido:'Mendivil'};


  return (

    <Component1 valor = {ahoraI3}> </Component1>

  );
}

export default App;
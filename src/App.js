import Alumn from "./Object_class3/Alumn";

function App() {
  //Objeto estatico
  const miSer = {
    nombre : 'Fernando Mendivil',
    matricula : 'A00232280',
    promedio : 70,
    semestre : 5,
    pasarSemestre : function(){
      if(this.promedio >= 70)
        return (this.semestre + 1);
    }
  }

  class alumnCreator {
    constructor(nombre, matricula, promedio, semestre){
      this.nombre = nombre;
      this.matricula = matricula;
      this.promedio = promedio;
      this.semestre = semestre;
    }
    pasarSemestre(){
      if(this.promedio >= 70)
        return (this.semestre + 1);
    }
  }

  let nuevoSer = new alumnCreator('Jorge Polo', 'Cosas', 0, 8)

  return (
    <div className="App">
      <Alumn alumn={miSer}/>

      <Alumn alumn={nuevoSer}/>
    </div>
  );
}

export default App;

/* Clase 2: componentes en componentes y argumentos
import logo from "./logo.svg";
import "./App.css";
import "./Components_class2/input.css";
// Los componentes deben ir en mayúscula
import Paragraph from "./Components_class2/Paragraph";

function App() {
  const clase = 2;
  //clase = 4; esto daria un error
  const titulo = "Clase " + clase + " de testing";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{titulo}</p>
        <Paragraph 
          title={titulo} 
          desc="Esto es un componente fuera de App.js"
          />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

/**
 * Primera clase: componente básico
import './App.css';
//import Component1 from './Components_class1/Component';
import Component1 from './Components_class1/Component';

function App() {

  const ahoraI = [5,4,3,2];
  const ahoraI2 = [...ahoraI, 1,2,3,4];
  const ahoraI3 = {nombre:'Fernando', apellido:'Mendivil'};

  return (
    //<Component1 valor = {ahoraI3}> </Component1>
    <Component1 valor = {ahoraI3}> </Component1>
  );
}
export default App;
 */

/* JSX: código js pero estilizado como html (fíjate en el primer div, className es de aquí);
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

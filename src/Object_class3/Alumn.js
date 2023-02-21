import { useState } from "react";

export default function Alumn(props) {
  let semestre = props.alumn.semestre;
  const [getSemestre, setSemestre] = useState(semestre);
  let promedio = props.alumn.promedio;
  const [getPromedio, setPromedio] = useState(promedio);
  
  let texto = "Bienvenido";
  const [getTexto, setTexto] = useState(texto);

  function calcularSemestre() {
    if (getPromedio >= 70){
      setSemestre(getSemestre + 1);
      setPromedio(0);
    } else {
      setPromedio(getPromedio + 10);
    }
  }

  return (
    <div>
      <div>Nombre: {props.alumn.nombre}</div>
      <div>Matrícula: {props.alumn.matricula}</div>
      <div>Promedio: {getPromedio}</div>
      <div>Semestre: {getSemestre}</div>

      <button onClick={calcularSemestre}>Calcular</button>

      <br />
      <br />
      <label>{getTexto}</label>
      <input onChange={(e) => setTexto(e.target.value)} type='text'></input>
      <br />
      <br />
      <br />
    </div>
  );
}
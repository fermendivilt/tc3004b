import { useState } from "react";

export default function Alumn(props) {
  const { alumn } = props;
  const [getSemestre, setSemestre] = useState(alumn.semestre);
  const [getPromedio, setPromedio] = useState(alumn.promedio);

  const calcularSemestre = () => {
    if (getPromedio >= 70) {
      setSemestre(Number(getSemestre) + 1);
      setPromedio(0);
    } else {
      setPromedio(Number(getPromedio) + 10);
    }
  };

  return (
    <tr>
      <td>{alumn.id}</td>
      <td>{alumn.nombre}</td>
      <td>{alumn.matricula}</td>
      <td>{getPromedio}</td>
      <td>{getSemestre}</td>
      <td>
        <button className="btn btn-info" onClick={calcularSemestre}>
          Calcular
        </button>
      </td>
    </tr>
  );
}

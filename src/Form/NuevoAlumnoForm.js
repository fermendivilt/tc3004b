import "../App.css";
import { useState } from "react";

export default function NuevoAlumnoForm(props) {
  const { counter, setCounter, setAlumnList } = props;

  const [alumn, setAlumn] = useState({
    id: 0,
    nombre: "",
    matricula: "",
    promedio: 0,
    semestre: 0,
  });
  function handleAlumn(e, key) {
    setAlumn({ ...alumn, [key]: e.target.value });
  }

  function addAlumn() {
    setCounter(counter + 1);
    setAlumnList((oldArray) => [...oldArray, alumn]);
    setAlumn({
      id: counter + 1,
      nombre: "",
      matricula: "",
      promedio: 0,
      semestre: 0
    })
  }

  return (
    <tr>
      <td>
        <input
          className="form-control"
          type="number"
          placeholder="Id"
          value={alumn.id}
          disabled
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre"
          value={alumn.nombre}
          onChange={(e) => handleAlumn(e, "nombre")}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          placeholder="Matrícula"
          value={alumn.matricula}
          onChange={(e) => handleAlumn(e, "matricula")}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          placeholder="Promedio"
          value={alumn.promedio}
          onChange={(e) => handleAlumn(e, "promedio")}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          placeholder="Semestre"
          value={alumn.semestre}
          onChange={(e) => handleAlumn(e, "semestre")}
        />
      </td>
      <td>
        <button className="btn btn-info" onClick={addAlumn}>
          Añadir
        </button>
      </td>
    </tr>
  );
}

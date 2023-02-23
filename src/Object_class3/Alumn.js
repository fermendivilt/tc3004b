import { useState } from "react";

export default function Alumn(props) {
  let semestre = props.alumn.semestre;
  const [getSemestre, setSemestre] = useState(semestre);
  let promedio = props.alumn.promedio;
  const [getPromedio, setPromedio] = useState(promedio);

  let texto = "Bienvenido";
  const [getTexto, setTexto] = useState(texto);

  const calcularSemestre = () => {
    if (getPromedio >= 70) {
      setSemestre(getSemestre + 1);
      setPromedio(0);
    } else {
      setPromedio(getPromedio + 10);
    }
  }

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Matrícula</th>
            <th scope="col">Promedio</th>
            <th scope="col">Semestre</th>
          </tr>
          <tr>
            <th scope="row">{props.alumn.nombre}</th>
            <th>{props.alumn.matricula}</th>
            <th>{getPromedio}</th>
            <th>{getSemestre}</th>
          </tr>
          <tr>
            <th scope="row"></th>
            <th></th>
            <th colSpan={1}>
              <button className="btn btn-info" onClick={calcularSemestre}>
                Calcular
              </button>
            </th>
            <th></th>
          </tr>
        </table>
      </div>

      <br />
      <br />

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{getTexto}</span>
        </div>
        <input
          type="text"
          onChange={(e) => setTexto(e.target.value)}
          class="form-control"
          aria-describedby="basic-addon3"
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

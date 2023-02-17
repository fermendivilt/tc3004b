function Alumn(props){
    return(
        <div>
            <div>Nombre: {props.alumn.nombre}</div>
            <div>Semestre: {props.alumn.matricula}</div>
            <div>Promedio: {props.alumn.promedio}</div>
            <div>Semestre: {props.alumn.pasarSemestre()}</div>
        </div>
    );
}
export default Alumn;
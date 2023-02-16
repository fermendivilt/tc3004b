function Input(props){
    let titulo = props.title;
    return(
        <div>
            <input type='text' className="inputText" placeholder="Dentro del componente xd" value={titulo}/>
            <p>
                {titulo}
            </p>
        </div>
    );
}

export default Input;
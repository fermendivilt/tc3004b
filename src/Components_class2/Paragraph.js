import Input from "./Input";

function Paragraph(props){
    const titulo = props.title;
    const description = props.desc;

    return(
        <div>
            <p>
                {description}
            </p>
            <Input title={titulo}/>
        </div>
    );
}

export default Paragraph;
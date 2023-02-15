import './component.css';

const Component1 = (props) => {

    function sayHello() {
        alert('Hello, World!11!1!!' + props.valor.nombre);
    }

    return (
        <button className="button" onClick={sayHello}>Clickeame</button>
    );
};

export default Component1;

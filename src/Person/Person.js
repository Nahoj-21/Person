const person = ( props ) => {
    return (
        <div>
            <p onClick={props.click}>Je suis {props.nom} et j'ai {props.age} !</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
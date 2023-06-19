
function Assistido(props) {
    return (
        <button className=".btnassist" onClick={() => props.onClick(props.id)}>
            {props.assistido ? "Assistir Novamente" : "Assistir Agora"}
        </button>
    );
}

export default Assistido;
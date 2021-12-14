


export default function Filho(props) {

    console.log(props.funcao)

    return(
        <div>
            <h1>Filho Alterado</h1>
            <button onClick={props.funcao}>Falar com o Pai 01</button>
            <button onClick={() => props.funcao("passei no enem!!", "Valeu", "Sou 10!")}>
                Falar com o Pai 02
                </button>
        </div>
    )
}
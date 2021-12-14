import { useState } from "react/cjs/react.development"
import NumeroDisplay  from "../../components/NumeroDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0)

  const inc = () => setNumero(numero + 1)

    function dec() {
        setNumero(numero - 1)
    }


    return(

        <div  style={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <h1>Contador</h1>
            <NumeroDisplay  numero={numero} />

            <div>

            <button style={{fontSize: "2em", margin: "5px"}} onClick={inc}>+</button>
            <button  style={{fontSize: "2em"}} onClick={dec}>-</button>
            </div>
        </div>
    )
}
import { useState } from "react/cjs/react.development"

export default function contador() {

    const [numero, setNumero] = useState(0)

  const inc = () => setNumero(numero + 1)

    function dec() {
        setNumero(numero - 1)
    }


    return(

        <div>
            <h1>Contador</h1>
            <div>Valor : {numero}</div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}
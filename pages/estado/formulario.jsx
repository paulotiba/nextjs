
// estado controlado!

import { useState } from "react/cjs/react.development"


export default function formulario() {

    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor + "!")
    }

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            border:"2px solid #222"

        }}
        >
            <input type="text" value={valor} 
            onChange={e => setValor(e.target.value)}
            />
            <button onClick={alterarInput}>alterar</button>
        </div>
    )

}
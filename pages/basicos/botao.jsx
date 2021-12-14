function acao1(){
    console.log("acao1")
}


function acao4(e) {
    console.log(e)
}



export default function botao () {
    return (
        <div>
            <input type="text" onChange={e => console.log(e.Length)} />
            <button onClick={acao1}>Click #01</button>
            <button onClick={
                function(){
                    console.log("acao2")
                }
            }>Click #02 </button>

            <button onClick={() => console.log("acao3")}>Click #03</button>

            <button onClick={acao4}>click04</button>
        </div>
    )
}
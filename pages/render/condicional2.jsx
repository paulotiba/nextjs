import If from "../../components/If";


export default function condicional2 () {
    const numero = 5 * 8
    return(
        <div>
           <If teste={numero % 2 === 0}>
               <h1>O número {numero} e par</h1>
           </If>
           <If teste={numero % 2 === 1}>
               <h1>O número {numero} e ímpar</h1>
           </If>
        </div>
    )
}
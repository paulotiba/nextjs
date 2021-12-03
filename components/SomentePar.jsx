export default function SomentePar(props) {
const numeroPar = props.numero % 2 === 0

return (
    <div>
        {numeroPar ? <h1>{props.numero}</h1> : null}
    </div>
)

}
 {/* return numeroPar ? <h5>{props.numero}</h5> : null */}
{/* // if(props.numero % 2 === 0) { */}
{/* //     return <h1>{props.numero}</h1> */}
{/* // } else { */}
{/* //     return null */}
{/* // } */}
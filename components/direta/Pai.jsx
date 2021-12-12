import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1> Familia{props.familia}</h1>

            <Filho nome="Paulo" familia={props.familia} />
            <Filho nome="João" familia={props.familia} />
            <Filho {...props}   nome="Gabriel" />

        </div>
    )
}
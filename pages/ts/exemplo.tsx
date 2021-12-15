import Pessoa from "../../components/pessoa";



export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="joão" idade={30} />
            <Pessoa nome="maria" />
        </div>
    )
}
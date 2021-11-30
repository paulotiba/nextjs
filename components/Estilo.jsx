export default function Estilo(props) {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2d2" : "#D22",
                color: props.color,
                textAlign: props.direita ? "right" : "left"

        }}>
                Texto modo estilo condicional css
            </h1>
        </div>
    )

}
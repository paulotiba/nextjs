export default function Lista(props) {
    return (
        <div>
            <h1>Ola Item</h1>

            <ul style={{
                listStyle: "none",
                color: "blue",
                padding: "0",
                marginLeft: "10px"
            }}>
                {props.children}
            </ul>
        </div>
    )
}
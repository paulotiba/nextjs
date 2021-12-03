export default function Repeticao1() {
    const ListaAprovados = [
        'pedro',
        'daniel',
        'joao',
        'carlos',
        'joedoe',
        'maria',
        'gilberto',
        'pereira',
    ]
    
    
    
    function renderizarLista() {
        return ListaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    
    
    return (
        <ul>
           {renderizarLista()}
        </ul>
    )
}
// function renderizarLista() {

//     const itens = []
     
//     for (let i = 0; i < ListaAprovados.length; i++) {
//         itens.push(<li key={i}>{ListaAprovados[i]}</li>)
//     }

//     return itens


// }
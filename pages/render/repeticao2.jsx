import ListaProdutos from "../../data/ListaProdutos"

export default function repeticao2() {
    const ComBorda = {
        
            border: "1px solid #e234", 
            // backgroundColor: "grey"  
    }
    
    function renderizarLinhas() {
        return ListaProdutos.map(produto => {
            return (
                <tr  key={produto.id}>
                    <td style={ComBorda}>{produto.id}</td>
                    <td style={ComBorda}>{produto.nome}</td>
                    <td style={ComBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }


    return (
        <div>
            <table style={ComBorda}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}

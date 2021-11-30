import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
            <Titulo principal= "Alterando as propriedades com props"
            secundario= "incluir, alterar e excluir coisas!"
            />
               <Titulo principal= "Alterando as propriedades com props"
            secundario= "todo conteúdo baseado dentro do componente,css,js,html!"
            pequeno
            />

            
        </div>
    )
}
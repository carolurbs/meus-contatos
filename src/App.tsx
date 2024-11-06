import BarraDeBusca from './Containers/Barra de busca'
import ListaDeContatos from './Containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraDeBusca />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App

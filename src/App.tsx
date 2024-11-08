import { Provider } from 'react-redux'
import BarraDeBusca from './Containers/Barra de busca'
import ListaDeContatos from './Containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraDeBusca />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App

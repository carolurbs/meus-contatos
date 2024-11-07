import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p>Você possui x contatos salvos</p>
    <ul>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos

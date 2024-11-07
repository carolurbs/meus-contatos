import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'User',
    telefone: '0000',
    email: 'user@user.com'
  }
]
const ListaDeContatos = () => (
  <Container>
    <p>Você possui x contatos salvos</p>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato nome={c.nome} telefone={c.telefone} email={c.email} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos

import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos)
  return (
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
}

export default ListaDeContatos

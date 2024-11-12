import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { key } = useSelector((state: RootReducer) => state.filter)
  const filterContacts = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(key.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>Você possui os seguintes contatos salvos com &quot;{key}&ldquo;</p>
      <ul>
        {filterContacts().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos

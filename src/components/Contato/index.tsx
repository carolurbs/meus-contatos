import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Name type="text" placeholder="Nome do Contato" />
    <S.Info type="tel" placeholder="Telefone do Contato" />
    <S.Info type="email" placeholder="Email do Contato" />
    <S.Actions>
      <S.Buttons>Editar</S.Buttons>
      <S.Buttons>Remover</S.Buttons>
    </S.Actions>
  </S.Card>
)
export default Contato

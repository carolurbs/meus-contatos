import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  telefone: string
  email: string
}

const Contato = ({ nome, telefone, email }: Props) => {
  const [isEditing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Name type="text" placeholder="Nome do Contato" value={nome} />
      <S.Info type="tel" placeholder="Telefone do Contato" value={telefone} />
      <S.Info type="email" placeholder="Email do Contato" value={email} />
      <S.Actions>
        {isEditing ? (
          <>
            <S.Buttons>Salvar</S.Buttons>
            <S.Buttons onClick={() => setEditing(false)}>Cancelar</S.Buttons>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setEditing(true)}>Editar</S.Buttons>
            <S.Buttons>Remover</S.Buttons>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Contato

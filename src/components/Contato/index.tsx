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
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelButton onClick={() => setEditing(false)}>
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setEditing(true)}>Editar</S.Buttons>
            <S.CancelButton>Remover</S.CancelButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Contato

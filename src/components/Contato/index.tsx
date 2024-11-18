import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { Buttons, SaveButton } from '../../styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contact from '../../models/Contact'

type Props = Contact

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false)
  const [nome, setName] = useState('')
  const [telefone, setTel] = useState('')
  const [email, setMail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setName(nomeOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTel(telefoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setMail(emailOriginal)
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal]),
    [nomeOriginal, telefoneOriginal, emailOriginal]

  function cancelEdit() {
    setEditing(false)
    setName(nomeOriginal)
    setTel(telefoneOriginal)
    setMail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Name
        type="text"
        placeholder="Nome do Contato"
        disabled={!isEditing}
        value={nome}
        onChange={(e) => setName(e.target.value)}
      />
      <S.Info
        type="tel"
        placeholder="Telefone do Contato"
        disabled={!isEditing}
        value={telefone}
        onChange={(e) => setTel(e.target.value)}
      />
      <S.Info
        type="email"
        placeholder="Email do Contato"
        disabled={!isEditing}
        value={email}
        onChange={(e) => setMail(e.target.value)}
      />
      <S.Actions>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelButton onClick={cancelEdit}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <Buttons onClick={() => setEditing(true)}>Editar</Buttons>
            <S.CancelButton onClick={() => dispatch(remover(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Contato

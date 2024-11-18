import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as S from '../../styles'
import { Field } from '../../styles'
import { Content, FormContainer } from './style'
import { cadastrar } from '../../store/reducers/contatos'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTel] = useState('')
  const [email, setMail] = useState('')
  const registerContact = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Título> Novo Contato </S.Título>
      <Content>
        <FormContainer onSubmit={registerContact}>
          <Field
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome do Contato"
          />
          <Field
            value={telefone}
            onChange={(e) => setTel(e.target.value)}
            type="tel"
            placeholder="Telefone do Contato"
          />
          <Field
            value={email}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Email do Contato"
          />
          <div>
            <S.SaveButton type="submit">Cadastrar</S.SaveButton>
            <S.Buttons onClick={() => navigate('/')}>Voltar</S.Buttons>
          </div>
        </FormContainer>
      </Content>
    </S.MainContainer>
  )
}

export default Form

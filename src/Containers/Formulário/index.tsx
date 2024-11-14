import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MainContainer, SaveButton, Título } from '../../styles'
import { Field } from '../../styles'
import { Content, FormContainer } from './style'

const Form = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setMail] = useState('')

  return (
    <MainContainer>
      <Título> Novo Contato </Título>
      <Content>
        <FormContainer>
          <Field
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome do Contato"
          />
          <Field
            value={tel}
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
            <SaveButton type="submit">Cadastrar</SaveButton>
          </div>
        </FormContainer>
      </Content>
    </MainContainer>
  )
}

export default Form

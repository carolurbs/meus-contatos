import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MainContainer, SaveButton, Título } from '../../styles'
import { Field } from '../../styles'
import { Content, FormContainer } from './style'
import Contact from '../../models/Contact'
import { cadastrar } from '../../store/reducers/contatos'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setMail] = useState('')
  const registerContact = (e: FormEvent) => {
    e.preventDefault()
    const contactToAdd = new Contact(nome, tel, email, 1)
    dispatch(cadastrar(contactToAdd))
    navigate('')
  }

  return (
    <MainContainer>
      <Título> Novo Contato </Título>
      <Content>
        <FormContainer onSubmit={registerContact}>
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

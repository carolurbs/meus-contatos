import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContatosState = {
  itens: Contact[]
}
const initialState: ContatosState = {
  itens: [
    {
      nome: '',
      telefone: '',
      email: '',
      id: 0
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contact>) => {
      const alreadyExist = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (alreadyExist) {
        alert('Já existe um contato com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})
export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer

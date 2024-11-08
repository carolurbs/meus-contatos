import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [new Contato('User', '(00)00000-0000', 'user@user.com', 1)],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})
export const { remover } = contatosSlice.actions
export default contatosSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import FilterReducer from './reducers/filter'
const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filter: FilterReducer
  }
})
export type RootReducer = ReturnType<typeof store.getState>
export default store

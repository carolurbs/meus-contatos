import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  key: string
}
const initialState: FilterState = {
  key: ''
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload
    }
  }
})
export const { changeKey } = filterSlice.actions
export default filterSlice.reducer

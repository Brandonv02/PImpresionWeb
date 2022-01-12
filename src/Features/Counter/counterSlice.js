import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'turnInformation',
  initialState: {
    idGroup: 0,
    strHeadquarterCode: 0,
    strIdentification: "",
  },
  reducers: {
    changeTurnGroup: (state, action) => {
        state.idGroup = action.payload
      },
    changeTurnHeadquarter: (state, action) => {
        state.strHeadquarterCode = action.payload
      },
    changeTurnIdentification: (state, action) => {
      state.strIdentification += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTurnGroup, changeTurnHeadquarter, changeTurnIdentification } = counterSlice.actions

export default counterSlice.reducer
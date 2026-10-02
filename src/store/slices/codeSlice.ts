import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface CodeState {
  selectedCodeId: string | null
}

const initialState: CodeState = {
  selectedCodeId: null,
}

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    selectCode: (state, action: PayloadAction<string | null>) => {
      state.selectedCodeId = action.payload
    }
  }
})

export const { selectCode } = codeSlice.actions

export default codeSlice.reducer
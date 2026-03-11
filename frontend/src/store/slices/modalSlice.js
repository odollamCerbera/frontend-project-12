import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  type: null, // 'addChannel', 'removeChannel', 'renameChannel'
  extraData: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { type, extraData } = action.payload
      state.isOpen = true
      state.type = type
      state.extraData = extraData || null
    },
    closeModal: (state) => {
      state.isOpen = false
      state.type = null
      state.extraData = null
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer

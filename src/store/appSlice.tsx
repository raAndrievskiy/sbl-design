import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './appTypes'

const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setBurger(state, action) {
      state.toggleMenu = !state.toggleMenu
      state.toggleMenu = action.payload
    },

    setScrollPage(state, action) {
      state.scrollPage = !state.scrollPage
      state.scrollPage = action.payload

      if (state.scrollPage) {
        document.body.style.overflow = 'visible'
      } else {
        document.body.style.overflow = 'hidden'
      }
    },

    setShowModal(state, action) {
      state.modal = !state.modal
      state.modal = action.payload
    },

    setShowClientsModal(state, action) {
      state.clientsModal = !state.clientsModal
      state.clientsModal = action.payload
    },

    setLoader(state, action) {
      state.loader = !state.loader
      state.loader = action.payload
    },

    setThxModal(state, action) {
      state.thxModal = !state.thxModal
      state.thxModal = action.payload
    },
  },
})

export const {
  setBurger,
  setScrollPage,
  setShowModal,
  setShowClientsModal,
  setLoader,
  setThxModal,
} = appSlice.actions

export default appSlice.reducer

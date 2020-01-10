import { createStore, action } from 'easy-peasy'

export const store = createStore({
  nav: {
    openStatus: false,
    setOpenStatus: action((state, openStatus) => state.openStatus = !state.openStatus)
  }
})

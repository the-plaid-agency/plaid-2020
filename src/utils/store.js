import { createStore, action } from 'easy-peasy'

export const store = createStore({
  nav: {
    openStatus: true,
    setOpenStatus: action((state, openStatus) => state.openStatus = !state.openStatus)
  }
})

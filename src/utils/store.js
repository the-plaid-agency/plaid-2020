import { createStore, action } from 'easy-peasy'

export const store = createStore({
  page: {
    currentPage: '',
    setCurrentPage: action((state, newPage) => {
      state.currentPage = newPage
    })
  },
  nav: {
    isNavOpen: false,
    openNav: action((state) => {
      state.isNavOpen = true
    }),
    closeNav: action((state) => {
      state.isNavOpen = false
    })
  }
})

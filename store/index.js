export const state = () => ({
  headerMenu: false,
})

export const mutations = {
  clickHeaderMenu(state) {
    state.headerMenu = !state.headerMenu
  },
}

export const getters = {
  getHeaderMenu(state) {
    return state.headerMenu
  }
}

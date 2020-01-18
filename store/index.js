export const state = () => ({
  headerMenu: false,
  internalApi: [],
})

export const mutations = {
  clickHeaderMenu(state) {
    state.headerMenu = !state.headerMenu
  },
  setInternalApi(state, data) {
    state.internalApi = data
  }
}

export const actions = {
  setInternalApi(context) {
    context.commit('')
  }
}

export const getters = {
  getHeaderMenu(state) {
    return state.headerMenu
  },
  getInternalApi(state) {
    return state.internalApi
  }
}

export const state = () => ({
  headerMenu: false,
  internalApi: [],
  search: false,
})

export const mutations = {
  clickHeaderMenu(state) {
    state.headerMenu = !state.headerMenu
  },
  setInternalApi(state, data) {
    state.internalApi = data
  },
  closeSearch(state) {
    state.search = false
  },
  toggleSearch(state) {
    state.search = !state.search
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
  },
  getSearchState(state) {
    return state.search
  }
}

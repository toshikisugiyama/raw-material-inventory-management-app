import axios from 'axios'

export const state = () => ({
  headerMenu: false,
  internalApi: [],
  search: false,
  user: null,
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
  },
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  setInternalApi(context) {
    context.commit('')
  },
  async register (context, data) {
    const url = process.env.baseUrl + 'register'
    const response = await axios.post(url, data).catch(err => {
      console.log(err.message)
    })
    context.commit('setUser', response.data)
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

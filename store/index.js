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
  closeHeaderMenu(state) {
    state.headerMenu = false
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
  async register(context, data) {
    const url = process.env.baseUrl + 'register'
    const response = await axios.post(url, data)
    context.commit('setUser', response.data)
  },
  async login(context, data) {
    const url = process.env.baseUrl + 'login'
    const response = await axios.post(url, data)
    context.commit('setUser', response.data)
  },
  async logout(context) {
    const url = process.env.baseUrl + 'logout'
    const response = await axios.post(url)
    context.commit('setUser', null)
  },
  async currentUser(context) {
    const url = process.env.baseUrl + 'user'
    const response = await axios.get(url)
    const user = response.data || null
    context.commit('setUser', user)
  }
}

export const getters = {
  getHeaderMenu: state => state.headerMenu,
  getInternalApi: state => state.internalApi,
  getSearchState: state => state.search,
  checkCurrentUser: state => !! state.user,
  getCurrentUserName: state => state.user ? state.user.name : '',
}

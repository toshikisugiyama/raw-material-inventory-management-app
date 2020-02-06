<template>
  <div>
    <Header @logout="logout()" />
    <Menu />
    <div class="body__main">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Menu,
    Footer,
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
      this.$store.commit('closeHeaderMenu')
      this.$store.commit('closeSearch')
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/variable.scss';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}

.body__main {
  margin: $header-height 0;
}
</style>

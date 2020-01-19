<template>
  <transition name="slide">
    <aside class="body__menu" v-if="isActive">
      <nav>
        <ul class="body__menu__list">
          <li class="body__menu__list__item" @click="handleClick">
            <nuxt-link to="/search">原材料在庫検索</nuxt-link>
          </li>
          <li class="body__menu__list__item" @click="handleClick">
            <nuxt-link to="/">原材料在庫一覧</nuxt-link>
          </li>
          <li class="body__menu__list__item" @click="handleClick">
            <nuxt-link to="/materials">登録済み原材料一覧</nuxt-link>
          </li>
          <li class="body__menu__list__item" @click="handleClick">
            <nuxt-link to="/create">原材料在庫登録</nuxt-link>
          </li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isActive: 'getHeaderMenu',
    })
  },
  methods: {
    handleClick() {
      this.$store.commit('clickHeaderMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-enter-active {
    animation: slide-in 0.3s;
  }
  .slide-leave-active {
    animation: slide-in 0.3s reverse;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-1000px)
    }
    to {
      transform: translateY(0)
    }
  }
  .body__menu {
    position: fixed;
    top: 60px;
    bottom: 60px;
    width: 100%;
    background-color: #fff;
    &__list {
      list-style: none;
      padding: 0;
      &__item {
        border-bottom: solid 1px #707070;
        & > a {
          padding: 20px 0 20px 10px;
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
</style>

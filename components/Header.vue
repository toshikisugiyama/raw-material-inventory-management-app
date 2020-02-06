<template>
  <header class="body__header">
    <h1 class="body__header__title">{{ $route.name }}</h1>
    <div class="body__header__info">
      <div class="body__header__info__logedin" v-if="$store.state.user">
        <h2 class="body__header__info__logedin__username">{{$store.state.user.name}}</h2>
        <div class="body__header__info__logedin__logout">
          <button @click="$emit('logout')">ログアウト</button>
        </div>
      </div>
      <HeaderMenu />
    </div>
  </header>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  components: {
    HeaderMenu,
  },
  methods: {
    AlertAuth(){
      alert(this.$auth.user)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.body__header {
  height: $header-height;
  background-color: $background-color;
  padding: 0 15px;
  color: #fff;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  &__title {
    font-size: 40px;
    margin: 0;
  }
  &__info {
    display: flex;
    align-items: center;
    &__logedin {
      display: flex;
      align-items: center;
      &__username{
        @include small-font(0);
      }
    }
  }
}
</style>

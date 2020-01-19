<template>
  <header class="body__header">
    <h1 class="header__title">{{ $route.name }}</h1>
    <HeaderMenu />
  </header>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu.vue'
export default {
  components: {
    HeaderMenu,
  }
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
}
</style>

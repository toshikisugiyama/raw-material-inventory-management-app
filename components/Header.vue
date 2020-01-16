<template>
  <header class="body__header">
    <h1 class="header__title">タイトル</h1>
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
.body__header {
  height: 60px;
  background-color: #120576;
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

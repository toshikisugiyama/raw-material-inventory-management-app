<template>
  <footer class="body__footer">
    <button @click="backPage">戻る</button>
    <nuxt-link to="/edit">
      <button>編集</button>
    </nuxt-link>
  </footer>
</template>

<script>
export default {
  methods: {
    backPage(){ this.$router.go(-1) },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.body__footer {
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
  justify-content: center;
  bottom: 0;
  button {
    height: $header-height - 10px;
    width: $header-height - 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 0 5px;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>

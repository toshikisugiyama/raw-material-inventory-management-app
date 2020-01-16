<template>
  <footer class="body__footer">
    <router-link :to="`/${selectedBackTo}`">
      <button>戻る</button>
    </router-link>
    <router-link to="/edit">
      <button>編集</button>
    </router-link>
  </footer>
</template>

<script>
export default {
  computed: {
    selectedBackTo: function(){
      if (this.$route.path===`/consume/${this.$route.params.lot_code}`) {
        return `detail/${this.$store.getters['inventories/getSelectedItem'].id}`
      }
      return ''
    },
  }
}
</script>

<style lang="scss" scoped>
.body__footer {
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
  justify-content: center;
  bottom: 0;
  & button {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 0 5px;
    font-size: 18px;
  }
}
</style>

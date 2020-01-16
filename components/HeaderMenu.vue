<template>
  <div class="header__menu" @click="handleClick" :class="{ 'header__menu_open': isActive }">
    <div class="header__menu__line"></div>
    <div class="header__menu__line"></div>
    <div class="header__menu__line"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isActive: 'getHeaderMenu',
    }),
  },
  methods: {
    handleClick() {
      this.$store.commit('clickHeaderMenu')
    }
  },
}
</script>

<style lang="scss" scoped>
$header-menu-height: 30px;
.header__menu {
  height: $header-menu-height;
  width: $header-menu-height;
  cursor: pointer;
  &__line {
    background-color: #fff;
    width: 100%;
    height: $header-menu-height/5;
    margin-bottom: $header-menu-height/5;
    transition: all .3s ease-out;
  }
}
.header__menu_open {
  position: relative;
  .header__menu__line:nth-child(1),
  .header__menu__line:nth-child(2){
    position: absolute;
    top: 50%;
    right: 0;
    margin: 0;
  }
  .header__menu__line:nth-child(1) {
    transform: rotate(-45deg);
  }
  .header__menu__line:nth-child(2) {
    transform: rotate(45deg);
  }
  .header__menu__line:nth-child(3) {
    display: none;
  }
}
</style>

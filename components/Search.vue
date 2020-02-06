<template>
  <div v-if="search" class="search">
    <label class="search__part search__label" for="search">検索</label>
    <input class="search__part search__input" id="search" type="text" v-model="keyword" @input="inputKeyword" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    ...mapGetters({
      search: 'getSearchState',
    })
  },
  methods: {
    inputKeyword: function() { return this.$emit('input-keyword', this.keyword)}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $header-height;
  border-bottom: solid $light-color 1px;
  &__part {
    @include small-font(0);
  }
  &__label {
    margin: 0 $item-padding 0 0;
  }
}
</style>

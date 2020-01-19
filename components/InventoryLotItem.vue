<template>
  <section class="lotitem">
    <!-- 製造番号 -->
    <h1 class="lotitem__lotcode">
      <span>製造番号</span>
      {{ item.lot_code }}
    </h1>
    <!-- 使用期限 -->
    <div class="lotitem__dead">
      {{ item.dead }}
      <span> 迄</span>
    </div>
    <!-- 在庫量 -->
    <div class="lotitem__quantity">
      {{ item.stock_quantity | addComma }}
      {{ internalApi.materials[item.material_id - 1].unit }}
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
  },
  filters: {
    addComma: val => val.toLocaleString(),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.lotitem {
  padding: $item-padding;
  border-bottom: $border-style;
  &__lotcode {
    @include large-font;
    display: flex;
    flex-direction: column;
    span {
      @include small-font(0);
      font-weight: normal;
    }
  }
  &__dead {
    @include small-font;
    color: $dark-color;
    span {
      color: $light-color;
    }
  }
  &__quantity {
    @include large-font(0);
    text-align: right;
  }
}
</style>

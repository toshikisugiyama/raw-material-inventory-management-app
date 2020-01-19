<template>
  <n-link :to="`/inventories/${inventory.id}`">
    <section class="inventories__item">
      <!-- 管理コード -->
      <div class="inventories__item__controlcode">
        {{ internalApi.materials[inventory.material_id - 1].control_code }}
      </div>
      <!-- 品名 -->
      <h1 class="inventories__item__name">
        {{ internalApi.materials[inventory.material_id - 1].name }}
      </h1>
      <!-- 製造番号 -->
      <div class="inventories__item__lotcode">
        <span>製造番号: </span>
        {{ inventory.lot_code }}
      </div>
      <!-- 使用期限 -->
      <div class="inventories__item__dead">
        {{ inventory.dead }}
        <span> 迄</span>
      </div>
      <!-- 在庫量 -->
      <div class="inventories__item__quantity">
        {{ inventory.stock_quantity | addComma }}
        <span>
          {{ internalApi.materials[inventory.material_id - 1].unit }}
        </span>
      </div>
    </section>
  </n-link>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: {
    inventory: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    })
  },
  filters: {
    addComma: val => val.toLocaleString(),
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.inventories__item {
  padding: $item-padding;
  border-bottom: solid 1px #707070;
  &__controlcode {
    @include small-font($dark-color);
  }
  &__name {
    @include large-font;
  }
  &__lotcode {
    @include small-font($dark-color);
    span {
      color: $light-color;
    }
  }
  &__dead {
    @include small-font($dark-color);
    span {
      color: $light-color;
    }
  }
  &__quantity {
    @include large-font;
    text-align: right;
  }
}
</style>

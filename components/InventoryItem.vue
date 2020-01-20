<template>
  <n-link :to="`/materials/${inventory.material_id}`">
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
  border-bottom: $border-style;
  &__controlcode {
    @include small-font;
  }
  &__name {
    @include large-font;
  }
  &__lotcode {
    @include small-font;
    color: $dark-color;
    font-weight: bold;
    span {
      color: $light-color;
      font-weight: normal;
    }
  }
  &__dead {
    @include small-font;
    color: $dark-color;
    font-weight: bold;
    span {
      color: $light-color;
      font-weight: normal;
    }
  }
  &__quantity {
    @include large-font(0);
    text-align: right;
  }
}
</style>

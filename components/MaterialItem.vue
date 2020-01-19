<template>
  <n-link :to="`/materials/${material.id}`">
    <section class="materials__item">
      <!-- 品番号 -->
      <div class="materials__item__controlcode">
        {{ material.control_code }}
      </div>
      <!-- 品名 -->
      <h1 class="materials__item__name">
        {{ material.name }}
      </h1>
      <!-- 仕入先 -->
      <div class="material__item__supplier">
        {{ material.supplier }}
      </div>
    </section>
  </n-link>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    material: {
      type: Object,
    },
  },
  computed: {
      ...mapGetters({
        internalApi: 'getInternalApi',
      })
    },
}
</script>

<style lang="scss" scoped>
$large-font: 25px;
$small-font: 18px;
.materials__item {
  padding: 15px 10px;
  border-bottom: solid 1px #707070;
  &__controlcode {
    font-size: $small-font;
  }
  &__name {
    font-size: $large-font;
  }
  &__supplier {
    font-size: $small-font;
  }
}
</style>

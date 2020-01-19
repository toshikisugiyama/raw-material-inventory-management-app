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
      <div class="materials__item__supplier">
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
@import '@/assets/scss/variable.scss';
.materials__item {
  padding: $item-padding;
  border-bottom: $border-style;
  &__controlcode {
    @include small-font;
  }
  &__name {
    @include large-font;
  }
  &__supplier {
    @include small-font(0);
  }
}
</style>

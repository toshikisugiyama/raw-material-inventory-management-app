<template>
  <section class="materials">
    <!-- 品番号 -->
    <div class="materials__controlcode">
      {{ selectedMaterial.control_code }}
    </div>
    <!-- 品名 -->
    <h1 class="materials__name">
      {{ selectedMaterial.name }}
    </h1>
    <!-- 仕入先 -->
    <div class="materials__supplier">
      {{ selectedMaterial.supplier }}
    </div>
    <!-- 在庫量 -->
    <div class="materials__total">
      <span class="materials__total__label">総量</span>
      {{ selectedMaterial.total | addComma }}
      <span class="materials__total__unit">
        {{ selectedMaterial.unit }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    selectedMaterial: {
      type: Object,
    },
  },
  filters: {
    addComma: val => val.toLocaleString(),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.materials {
  padding: $item-padding;
  padding-bottom: $item-padding*2;
  border-bottom: $border-style;
  &__controlcode {
    @include small-font;
    margin-bottom: $item-padding/2;
  }
  &__name {
    @include large-font;
  }
  &__supplier {
    @include small-font;
  }
  &__total {
    text-align: right;
    @include large-font(0);
    &__label {
      @include small-font;
      font-weight: normal;
    }
  }
}
</style>

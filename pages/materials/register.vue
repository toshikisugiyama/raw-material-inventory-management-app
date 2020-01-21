<template>
  <section class="register-inventory">
    <div class="register-inventory__input register-inventory__control-code">
      <label for="control_code">品コード</label>
      <input id="control_code" type="text">
    </div>
    <div class="register-inventory__input register-inventory__name">
      <label for="name">品名</label>
      <input id="name" type="text">
    </div>
    <div class="register-inventory__input register-inventory__supplier">
      <label for="supplier">仕入先</label>
      <input id="supplier" type="text">
    </div>
    <div class="register-inventory__input register-inventory__unit">
      <label for="unit">単位</label>
      <select name="unit" id="unit">
        <option disabled value="">単位を選択してください</option>
        <option>mg</option>
        <option>g</option>
        <option>kg</option>
        <option>mL</option>
        <option>L</option>
      </select>
    </div>
    <div class="register-inventory__input register-inventory__material-comment">
      <label for="material-comment">備考</label>
      <textarea name="material-comment" id="note" cols="30" rows="10"></textarea>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.register-inventory {
  padding: $item-padding;
  &__input {
    display: flex;
    flex-direction: column;
    margin: $item-padding*1.5 0;
    label {
      @include small-font;
      font-weight: bold;
    }
    input,
    select,
    textarea {
      @include small-font(0);
      color: $dark-color;
    }
  }
}
</style>

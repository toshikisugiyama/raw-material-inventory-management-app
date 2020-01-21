<template>
  <section class="register-inventory">
    <div class="register-inventory__input register-inventory__control-code">
      <label for="control-code">品コード</label>
      <input id="control-code" type="text">
    </div>
    <div class="register-inventory__input register-inventory__name">
      <label for="name">品名</label>
      <input id="name" type="text">
    </div>
    <div class="register-inventory__input register-inventory__lot-code">
      <label for="lot-code">製造コード</label>
      <input id="lot-code" type="text">
    </div>
    <div class="register-inventory__input register-inventory__quantity">
      <label for="quantity">仕入量</label>
      <input id="quantity" type="number">
    </div>
    <div class="register-inventory__input register-inventory__dead">
      <label for="dead">使用期限</label>
      <input id="dead" type="date">
    </div>
    <div class="register-inventory__input register-inventory__inventory-comment">
      <label for="inventory-comment">備考</label>
      <textarea name="inventory-comment" id="inventory-comment" cols="30" rows="10"></textarea>
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
    textarea {
      @include small-font(0);
      color: $dark-color;
    }
  }
}
</style>

<template>
  <form class="form">
    <p class="form__item">
      <label for="register-name">Name</label>
      <input type="text" name="register-name" v-model="registerForm.name">
    </p>
    <p class="form__item">
      <label for="register-email">Email</label>
      <input type="email" name="register-email" v-model="registerForm.email" autocomplete="username">
    </p>
    <p class="form__item">
      <label for="register-pass">Pass</label>
      <input type="password" name="register-pass" v-model="registerForm.pass" autocomplete="current-password">
    </p>
    <p class="form__item">
      <label for="register-pass-confirmation">Pass(confirmation)</label>
      <input type="password" name="register-pass-confirmation" v-model="registerForm.pass_conrirmation" autocomplete="current-password">
    </p>
    <div class="form__button">
      <button type="submit" @click.prevent.self="submitRegister">登録</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    registerForm: {
      type: Object,
      required: true,
    },
  },
  methods: {
    submitRegister: function() {
      this.$emit('input-form', this.registerForm)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto $item-padding;
    input {
      width: 100%;
    }
  }
}
</style>

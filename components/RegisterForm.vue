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
      <label for="register-password">Password</label>
      <input type="password" name="register-password" v-model="registerForm.password" autocomplete="current-password">
    </p>
    <p class="form__item">
      <label for="register-password-confirmation">Password(confirmation)</label>
      <input type="password" name="register-password-confirmation" v-model="registerForm.password_confirmation" autocomplete="current-password">
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

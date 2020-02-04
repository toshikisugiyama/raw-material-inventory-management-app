<template>
  <form class="form">
    <p class="form__item">
      <label for="login-email">Email</label>
      <input type="email" name="login-email" v-model="loginForm.email" autocomplete="username">
    </p>
    <p class="form__item">
      <label for="login-password">Password</label>
      <input type="password" name="login-password" v-model="loginForm.password" autocomplete="current-password">
    </p>
    <div class="form__button">
      <button type="submit" @click.prevent.self="submitLogin">ログイン</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    loginForm: {
      type: Object,
    }
  },
  methods: {
    submitLogin: function() {
      this.$emit('input-form', this.loginForm)
    }
  }
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

<template>
  <section class="login">
    <ul class="login__tab">
      <li
        class="login__tab__item"
        :class="{'login__tab__item_active': tab===0}"
        @click="tab=0"
      >
        ログイン
      </li>
      <li
        class="login__tab__item"
        :class="{'login__tab__item_active': tab===1}"
        @click="tab=1"
      >
        登録
      </li>
    </ul>
    <div class="login__form" v-show="tab === 0">
      <LoginForm @input-form="inputLoginForm" :loginForm="loginForm" />
    </div>
    <div class="login__form" v-show="tab === 1">
      <RegisterForm @input-form="inputRegisterForm" :registerForm="registerForm" />
    </div>
  </section>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      tab: 0,
      loginForm: {
        email: '',
        pass: '',
      },
      registerForm: {
        name: '',
        email: '',
        pass: '',
        pass_confirmation: '',
      },
    }
  },
  methods: {
    inputLoginForm: function(event) {
      this.loginForm = event
      this.login()
    },
    login: function() {
      console.log(this.loginForm)
    },
    inputRegisterForm: function(event) {
      this.registerForm = event
      this.register()
    },
    register: function() {
      console.log(this.registerForm)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.login {
  &__tab {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: $header-height*1.5 $item-padding $item-padding;
    &__item {
      cursor: pointer;
      transition: all 0.8s;
      user-select: none;
    }
    &__item:first-child {
      margin: 0 $item-padding 0 0;
    }
    &__item_active {
      color: $light-color;
      cursor: auto;
    }
  }
  &__form {
    margin: 0 $item-padding;
  }
}
</style>

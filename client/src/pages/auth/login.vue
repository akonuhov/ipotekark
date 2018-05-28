<template lang="html">
  <div class="login login--bg">
    <div class="login__logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="login__form">
      <h2 class="text-center">Введите личные данные для входа в систему</h2>
      <el-form :model="login" :rules="rules" ref="loginForm">
        <el-form-item label="Email" prop="email">
          <el-input placeholder="Email" v-model="login.email"></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
          <el-input placeholder="Пароль" v-model="login.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmitLoginForm">Войти</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  data: () => ({
    login: {
      email: null,
      password: null
    },
    rules: {
      email: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      password: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      }
    }
  }),
  methods: {
    onSubmitLoginForm () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$http.post('/api/users/auth', this.login)
            .then(res => {
              console.log(true)
              // this.$message({
              //   message: 'Заемщик добавлен',
              //   type: 'success'
              // })
            })
            .catch(error => {
              console.log(error)
              // this.$message({
              //   message: error.response.data.error.message,
              //   type: 'error'
              // })
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  &__form {
    padding: 20px;
    width: 400px;
    height: 100%;
    margin: auto 0 auto auto;
    box-sizing: border-box;
    box-shadow: -1px 0 10px #ffffff;
    background-color: #ffffff;
    h2 {
      margin: 20px 0;
    }
    .el-button {
      width: 100%;
    }
  }
  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0 auto auto;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px #ffffff;
    img {
      max-width: 100px;
    }
  }
  &--bg {
    background-image: url("../../assets/images/bg-login.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>

<template lang="html">
  <layouts-default>
    <h1>Введите данные о сотруднике</h1>
    <el-form :model="userObject" :rules="rules" ref="userObjectForm" label-position="top" class="el-form--user">
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="ФИО" prop="fio">
              <el-input v-model="userObject.fio" placeholder="ФИО"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Должность" prop="position">
              <el-input v-model="userObject.position" placeholder="Должность"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Дата рождения" prop="dataBirth">
              <el-date-picker
                v-model="userObject.dataBirth"
                type="date"
                placeholder="Дата рождения">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Дата принятия на работу" prop="employmentDate">
              <el-date-picker
                v-model="userObject.employmentDate"
                type="date"
                placeholder="Дата принятия на работу">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Электронная почта" prop="email">
              <el-input v-model="userObject.email" placeholder="Электронная почта"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Контактный телефон" prop="phone">
              <el-input v-model="userObject.phone" placeholder="Контактный телефон"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Роль" prop="role">
              <el-select v-model="userObject.role" placeholder="Роль">
                <el-option label="Специалист" value="specialist"></el-option>
                <el-option label="Менеджер" value="manager"></el-option>
                <el-option label="Администратор" value="admin"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Пароль" prop="password">
              <el-input v-model="userObject.password" placeholder="Пароль"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter="12">
        <el-col :span="24">
          <el-button type="success" @click="onUpdateUser">Обновить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageUserCreate',
  data: () => ({
    userObject: {
      firstName: null,
      lastName: null,
      middleName: null,
      password: null,
      dataBirth: null,
      email: null,
      position: null,
      phone: null,
      employmentDate: null,
      role: null
    },
    rules: {
      fio: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      password: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      dataBirth: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      email: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      position: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      phone: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      employmentDate: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      role: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'blur'
      }
    }
  }),
  created () {
    this.$http.get('/api/users/' + this.$route.params.id)
      .then(res => {
        this.userObject = Object.assign(this.userObject, res.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onUpdateUser () {
      this.$refs['userObjectForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/update', [this.userObject, this.$route.params.id])
        } else {
          return false
        }
      })
    },
    onClickButtonBack () {
      this.$router.push('/user')
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
.el-form--user {
  .el-form-item {
    &__content {
      .el-date-editor {
        width: 100%;
      }
      .el-select {
        width: 100%;
      }
    }
  }
}
</style>

<template lang="html">
  <layouts-default>
    <h1>Введите данные о оценщике</h1>
    <el-form :model="evaluatorObject" :rules="rules" ref="evaluatorObjectForm" label-position="top" class="el-form--borrower">
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <el-form-item label="Наименование с указанием ОГРН и местонахождения" prop="name">
              <el-input v-model="evaluatorObject.name" placeholder="Наименование с указанием ОГРН и местонахождения"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <el-form-item label="Наименование в творительном падеже, с указанием ОГРН и местонахождения">
              <el-input v-model="evaluatorObject.nameTvoritelny" placeholder="Наименование в творительном падеже, с указанием ОГРН и местонахождения"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Расчетный счет">
              <el-input v-model="evaluatorObject.bankAccount" placeholder="Расчетный счет"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Банк">
              <el-input v-model="evaluatorObject.bank" placeholder="Банк"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="ИНН">
              <el-input v-model="evaluatorObject.inn" placeholder="ИНН"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="КПП">
              <el-input v-model="evaluatorObject.kpp" placeholder="КПП"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" :md="24" :sm="24" :xs="24">
            <el-form-item label="Иная информация">
              <el-input type="textarea" :rows="5" v-model="evaluatorObject.other" placeholder="Иная информация"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="success" @click="onCreateEvaluator">Добавить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageEvaluatorCreate',
  data: () => ({
    evaluatorObject: {
      name: null,
      nameTvoritelny: null,
      bankAccount: null,
      bank: null,
      inn: null,
      kpp: null,
      other: null
    },
    rules: {
      name: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      }
    }
  }),
  methods: {
    onCreateEvaluator () {
      this.$refs['evaluatorObjectForm'].validate((valid) => {
        if (valid) {
          this.$http.post('/api/evaluators', this.evaluatorObject)
            .then(res => {
              this.$router.push('/evaluator')
              this.$message({
                message: 'Оценщик добавлен',
                type: 'success'
              })
            })
            .catch(error => {
              this.$message({
                message: error.response.data.error.message,
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    },
    onClickButtonBack () {
      this.$router.push('/evaluator')
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

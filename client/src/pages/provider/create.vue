<template lang="html">
  <layouts-default>
    <h1>Введите данные о продавце/застройщике</h1>
    <el-form :model="providerObject" :rules="rules" ref="providerObjectForm" label-position="top" class="el-form--borrower">
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <el-form-item label="Наименование с указанием ОГРН и местонахождения" prop="name">
              <el-input v-model="providerObject.name" placeholder="Наименование с указанием ОГРН и местонахождения"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <el-form-item label="Наименование в творительном падеже, с указанием ОГРН и местонахождения" prop="nameTvoritelny">
              <el-input v-model="providerObject.nameTvoritelny" placeholder="Наименование в творительном падеже, с указанием ОГРН и местонахождения"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Расчетный счет" prop="bankAccount">
              <el-input v-model="providerObject.bankAccount" placeholder="Расчетный счет"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Банк" prop="bank">
              <el-input v-model="providerObject.bank" placeholder="Банк"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="ИНН" prop="inn">
              <el-input v-model="providerObject.inn" placeholder="ИНН"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="КПП" prop="kpp">
              <el-input v-model="providerObject.kpp" placeholder="КПП"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <el-form-item label="Адрес земельного участка">
              <el-input v-model="providerObject.landPlace.address" placeholder="Адрес земельного участка"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Площадь, кв. м">
              <el-input v-model="providerObject.landPlace.area" placeholder="Площадь, кв. м"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Кадастровый номер">
              <el-input v-model="providerObject.landPlace.cadastralId" placeholder="Кадастровый номер"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" :md="24" :sm="24" :xs="24">
            <el-form-item label="Иная информация">
              <el-input type="textarea" :rows="5" v-model="providerObject.other" placeholder="Иная информация"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="success" @click="onCreateProvider">Добавить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageProviderCreate',
  data: () => ({
    providerObject: {
      name: null,
      nameTvoritelny: null,
      bankAccount: null,
      bank: null,
      inn: null,
      kpp: null,
      landPlace: {
        address: null,
        area: null,
        cadastralId: null
      },
      other: null
    },
    rules: {
      name: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      nameTvoritelny: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      bankAccount: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      bank: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      inn: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      kpp: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      }
    }
  }),
  methods: {
    onCreateProvider () {
      this.$refs['providerObjectForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('provider/create', this.providerObject)
        } else {
          return false
        }
      })
    },
    onClickButtonBack () {
      this.$router.push('/provider')
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

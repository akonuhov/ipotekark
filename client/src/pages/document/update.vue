<template lang='html'>
  <layouts-default>
    <h1>Добавьте документ</h1>
    <el-form label-position='top' class='el-form--borrower'>
      <el-card shadow='hover'>
        <el-row :gutter='20'>
          <el-col :span='24' :md='24' :sm='24' :xs='24'>
            <el-form-item label='Наименование документа'>
              <el-input v-model='documentObject.name' placeholder='Наименование документа'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='24' :md='24' :sm='24' :xs='24'>
            <el-form-item label='Содержание документа'>
              <vuemce :config="config" v-model="documentObject.text" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter='20'>
        <el-col :span='24'>
          <el-button type='success' @click="onUpdateDocument">Обновить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import { component } from 'vue-mce'
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageDocumentCreate',
  data: () => ({
    documentObject: {
      name: null,
      text: null
    },
    config: null
  }),
  created () {
    this.documentObject = this.$store.state.document.list.find(item => item._id === this.$route.params.id)
    this.config = {
      plugins: 'template',
      menubar: 'insert',
      toolbar: 'template',
      templates: [
        {title: 'Название договора', description: 'Some desc 1', content: this.$store.state.borrower.list[0].passportData.fioDatelny},
        {title: 'Some title 2', description: 'Some desc 2', content: 'My content 2'}
      ]
    }
  },
  methods: {
    onUpdateDocument () {
      this.$store.dispatch('document/update', [this.documentObject, this.$route.params.id])
    },
    onClickButtonBack () {
      this.$router.push('/document')
    }
  },
  components: {
    LayoutsDefault,
    'vuemce': component
  }
}
</script>

<style lang='scss'>
</style>

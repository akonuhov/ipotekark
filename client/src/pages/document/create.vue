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
              <editor v-model="documentObject.text"
                      toolbar="a11ycheck, code" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter='20'>
        <el-col :span='24'>
          <el-button type='success' @click="onCreateDocument">Добавить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageDocumentCreate',
  data: () => ({
    documentObject: {
      name: null,
      text: null
    }
  }),
  methods: {
    onCreateDocument () {
      this.$store.dispatch('document/create', this.documentObject)
    },
    onClickButtonBack () {
      this.$router.push('/document')
    }
  },
  components: {
    LayoutsDefault,
    Editor
  }
}
</script>

<style lang='scss'>
</style>

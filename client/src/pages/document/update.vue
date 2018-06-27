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
                      plugins="advlist autolink autosave link image lists charmap print preview hr anchor pagebreak"
                      toolbar="newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor | table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | visualchars visualblocks nonbreaking template pagebreak restoredraft" />
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
import Editor from '@tinymce/tinymce-vue'
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageDocumentCreate',
  data: () => ({
    documentObject: {
      name: null,
      text: null,
      tinymceConfig: {
        plugins: [
          'advlist autolink autosave link image lists charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
          'table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern'
        ],
        toolbar: {
          toolbar1: 'newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect',
          toolbar2: 'cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor',
          toolbar3: 'table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | visualchars visualblocks nonbreaking template pagebreak restoredraft',
          menubar: false,
          toolbar_items_size: 'small',
          style_formats: [{
            title: 'Bold text',
            inline: 'b'
          }, {
            title: 'Red text',
            inline: 'span',
            styles: {
              color: '#ff0000'
            }
          }, {
            title: 'Red header',
            block: 'h1',
            styles: {
              color: '#ff0000'
            }
          }, {
            title: 'Example 1',
            inline: 'span',
            classes: 'example1'
          }, {
            title: 'Example 2',
            inline: 'span',
            classes: 'example2'
          }, {
            title: 'Table styles'
          }, {
            title: 'Table row 1',
            selector: 'tr',
            classes: 'tablerow1'
          }],
          templates: [{
            title: 'Test template 1',
            content: 'Test 1'
          }, {
            title: 'Test template 2',
            content: 'Test 2'
          }]
        }
      }
    }
  }),
  created () {
    this.$http.get('/api/documents/' + this.$route.params.id)
      .then(res => {
        this.documentObject = Object.assign(this.documentObject, res.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onUpdateDocument () {
      this.$http.put('/api/documents/' + this.$route.params.id, this.documentObject)
        .then(res => {
          this.$router.push('/document')
          this.$message({
            message: 'Шаблон документа обновлен',
            type: 'success'
          })
        })
        .catch(error => {
          this.$message({
            message: error.response.data.error.message,
            type: 'error'
          })
        })
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

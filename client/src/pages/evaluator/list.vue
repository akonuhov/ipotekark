<template lang="html">
  <layouts-default>
    <h1>Список оценщиков</h1>
    <el-table
      :data="getAllEvaluatorObject"
      empty-text="Список операций пуст">
      <el-table-column
        prop="name"
        label="Наименование с указанием ОГРН и местонахождения"
        sortable>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageEvaluatorList',
  data: () => ({
    evaluatorObject: []
  }),
  created () {
    this.$http.get('/api/evaluators')
      .then(res => {
        this.evaluatorObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    getAllEvaluatorObject () {
      return this.evaluatorObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

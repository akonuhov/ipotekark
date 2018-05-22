<template lang="html">
  <layouts-default>
    <h1>Список оценщиков</h1>
    <el-table
      :data="getAllEcaluatorObject"
      empty-text="Список операций пуст">
      <el-table-column
        prop="_id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Наименование с указанием ОГРН и местонахождения"
        sortable>
      </el-table-column>
      <el-table-column
        prop="bankAccount"
        label="Расчетный счет">
      </el-table-column>
      <el-table-column
        prop="bank"
        label="Банк">
      </el-table-column>
      <el-table-column
        prop="inn"
        label="ИНН"
        sortable>
      </el-table-column>
      <el-table-column
        prop="kpp"
        label="КПП"
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
    ecaluatorObject: []
  }),
  computed: {
    getAllEcaluatorObject () {
      return this.ecaluatorObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

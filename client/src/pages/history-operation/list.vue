<template lang="html">
  <layouts-default>
    <h1>Список проведенных оперций</h1>
    <el-table
      :data="getAllHistoryOperationObject"
      empty-text="Список операций пуст">
      <el-table-column
        prop="_id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="passportData.lastName"
        label="Название операции"
        sortable>
      </el-table-column>
      <el-table-column
        prop="passportData.firstName"
        label="Дата операции"
        sortable>
      </el-table-column>
      <el-table-column
        prop="passportData.middleName"
        label="Ответсвенный"
        sortable>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageHistoryOperationList',
  data: () => ({
    historyOperationObject: []
  }),
  computed: {
    getAllHistoryOperationObject () {
      return this.historyOperationObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

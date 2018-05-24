<template lang="html">
  <layouts-default>
    <h1>Список кредитных дел</h1>
    <el-table
      :data="getAllCreditsObject"
      :default-sort = "{prop: '_id', order: 'descending'}"
      empty-text="Список кредитных дел пуст">
      <el-table-column
        prop="_id"
        label="ID"
        sortable>
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="ФИО">
      </el-table-column>
      <el-table-column
        prop="amountCredit"
        label="Сумма займа">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Доход">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Ежемесяный платеж">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Менеджер">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Статус">
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageCreditObjectList',
  data: () => ({
    creditsObject: [],
    tableData: [{
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }, {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }, {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }, {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }]
  }),
  created () {
    this.$http.get(this.$config.config.apiUrl.creditObject.getAll)
      .then(res => {
        this.creditsObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    formatter (row, column) {
      return row.address
    }
  },
  computed: {
    getAllCreditsObject () {
      return this.creditsObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">

</style>

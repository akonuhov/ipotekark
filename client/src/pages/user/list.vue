<template lang="html">
  <layouts-default>
    <h1>Список сотрудников</h1>
    <el-table
      :data="getAllUsersObject"
      :default-sort = "{prop: '_id', order: 'descending'}"
      empty-text="Список сотрудников пуст">
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
        label="Должность">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Дата приема на работу">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Контактный телефон">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Электронная почта">
      </el-table-column>
      <el-table-column
        prop="timeCredit"
        label="Дата рождения">
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageUserList',
  data: () => ({
    usersObject: []
  }),
  created () {
    this.$http.get(this.$config.config.apiUrl.users.getAll)
      .then(res => {
        this.usersObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    getAllUsersObject () {
      return this.usersObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

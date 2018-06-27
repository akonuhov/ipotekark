<template lang="html">
  <layouts-default>
    <h1>Список сотрудников</h1>
    <el-table
      :data="getAllUsersObject"
      :default-sort = "{prop: '_id', order: 'descending'}"
      @row-click="onRowClick"
      empty-text="Список сотрудников пуст">
      <el-table-column
        prop="fio"
        label="ФИО"
        sortable>
      </el-table-column>
      <el-table-column
        prop="position"
        label="Должность"
        sortable>
      </el-table-column>
      <el-table-column
        prop="employmentDate"
        label="Дата приема"
        :formatter="formatterEmploymentDate">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="Контактный телефон">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Электронная почта"
        width="200">
      </el-table-column>
      <el-table-column
        prop="dataBirth"
        label="Дата рождения"
        :formatter="formatterDataBirth">
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
    this.$http.get('/api/users')
      .then(res => {
        this.usersObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    formatterEmploymentDate (row, column) {
      return this.moment(row.employmentDate).format('DD MMMM YYYY')
    },
    formatterDataBirth (row, column) {
      return this.moment(row.dataBirth).format('DD MMMM YYYY')
    },
    onRowClick (row, event, column) {
      this.$router.push('/user/update/' + row._id)
    }
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

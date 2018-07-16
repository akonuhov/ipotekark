<template lang="html">
  <layouts-default>
    <h1>Список сотрудников</h1>
    <el-table
      :data="getAllUsersObject"
      :default-sort = "{prop: '_id', order: 'descending'}"
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
        label="Электронная почта">
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center"
        width="100">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickUserEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickUserDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageUserList',
  methods: {
    formatterEmploymentDate (row, column) {
      return this.moment(row.employmentDate).format('DD MMMM YYYY')
    },
    formatterDataBirth (row, column) {
      return this.moment(row.dataBirth).format('DD MMMM YYYY')
    },
    onClickUserEdit (id) {
      this.$router.push('/user/update/' + id)
    },
    onClickUserDelete (id) {
      this.$store.dispatch('users/remove', id)
    }
  },
  computed: {
    getAllUsersObject () {
      return this.$store.state.users.list
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
.fas {
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
}
</style>

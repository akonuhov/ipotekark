<template lang="html">
  <layouts-default>
    <h1>Список сотрудников</h1>
    <el-table
      :data="getAllUsersObject"
      :default-sort = "{prop: '_id', order: 'descending'}"
      empty-text="Список сотрудников пуст">
      <el-table-column type="expand">
      <template slot-scope="props">
        <div class="el-table__user-info">
          <p><b>ФИО</b>: {{ props.row.fio }}</p>
          <p><b>Должность</b>: {{ props.row.position }}</p>
          <p><b>Дата рождения</b>: {{ formatterDate(props.row.dataBirth) }}</p>
          <p><b>Дата принятия на работу</b>: {{ formatterDate(props.row.employmentDate) }}</p>
          <p><b>Электронная почта</b>: {{ props.row.email }}</p>
          <p><b>Контактный телефон</b>: {{ props.row.phone }}</p>
          <p><b>Роль</b>: {{ getRoleName(props.row.role) }}</p>
        </div>
      </template>
    </el-table-column>
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
        align="center">
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
    formatterDate (date) {
      return this.moment(date).format('DD MMMM YYYY')
    },
    getRoleName (role) {
      switch (role) {
        case 'specialist':
          return 'Специалист'
        case 'manager':
          return 'Менеджер'
        case 'admin':
          return 'Администратор'
      }
    },
    onClickUserEdit (id) {
      this.$router.push('/user/update/' + id)
    },
    onClickUserDelete (id) {
      this.$confirm('Вы точно хотите удалить сотрудника из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('user/remove', id)
      })
    }
  },
  computed: {
    getAllUsersObject () {
      return this.$store.state.user.list
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
.el-table {
  &__user-info {
    margin-left: 8px;
    p {
      margin: 0 0 15px;
    }
  }
}
</style>

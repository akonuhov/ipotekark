<template lang="html">
  <layouts-default>
    <h1>Список заемщиков</h1>
    <el-table
      :data="getAllBorrowersObject"
      empty-text="Список заемщиков пуст">
      <el-table-column
        prop="passportData.fioImenitelny"
        label="ФИО"
        sortable>
      </el-table-column>
      <el-table-column
        prop="passportData.placeBirth"
        label="Место рождения"
        sortable>
      </el-table-column>
      <el-table-column
        prop="contactData.phoneMobile"
        label="Телефон">
      </el-table-column>
      <el-table-column
        prop="contactData.email"
        label="Email">
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickBorrowerEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickBorrowerDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageBorrowerList',
  methods: {
    onClickBorrowerEdit (id) {
      this.$router.push('/borrower/update/' + id)
    },
    onClickBorrowerDelete (id) {
      this.$confirm('Вы точно хотите удалить заемщика из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('borrower/remove', id)
      })
    }
  },
  computed: {
    getAllBorrowersObject () {
      return this.$store.state.borrower.list
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

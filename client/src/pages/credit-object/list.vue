<template lang="html">
  <layouts-default>
    <h1>Список кредитных дел</h1>
    <el-table
      :data="getAllCreditsObject"
      :default-sort = "{prop: '_id', order: 'descending'}"
      empty-text="Список кредитных дел пуст">
      <el-table-column
        prop="id"
        label="Номер кредитного дела">
      </el-table-column>
      <el-table-column
        prop="borrowerId"
        label="Заемщик">
      </el-table-column>
      <el-table-column
        prop="providerId"
        label="Продавцы/Застройщики">
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickCreditObjectEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickCreditObjectDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageCreditObjectList',
  methods: {
    formatter (row, column) {
      return row.address
    },
    onClickCreditObjectEdit (id) {
      this.$router.push('/credit-object/update/' + id)
    },
    onClickCreditObjectDelete (id) {
      this.$confirm('Вы точно хотите удалить кредитное дело из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('creditObject/remove', id)
      })
    }
  },
  computed: {
    getAllCreditsObject () {
      return this.$store.state.creditObject.list
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

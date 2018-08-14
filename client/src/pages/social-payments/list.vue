<template lang="html">
  <layouts-default>
    <h1>Список социальных выплат</h1>
    <el-table
      :data="getAllSocialPaymentObjectObject"
      empty-text="Список социальных выплат пуст">
      <el-table-column
        prop="category"
        label="Категория соц. выплаты"
        sortable>
      </el-table-column>
      <el-table-column
        prop="borrowerId"
        label="Заемщик"
        sortable>
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickSocialPaymentEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickSocialPaymentDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageSocialPaymentsList',
  computed: {
    getAllSocialPaymentObjectObject () {
      return this.$store.state.socialPayment.list
    }
  },
  methods: {
    onClickSocialPaymentEdit (id) {
      this.$router.push('/social-payment/update/' + id)
    },
    onClickSocialPaymentDelete (id) {
      this.$confirm('Вы точно хотите удалить соуиальную выплату из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('socialPayment/remove', id)
      })
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

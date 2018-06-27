<template lang="html">
  <layouts-default>
    <h1>Список социальных выплат</h1>
    <el-table
      :data="getAllSocialPaymentObjectObject"
      empty-text="Список социальных выплат пуст"
      @row-click="onRowClick">
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
        align="center"
        width="100">
        <template slot-scope="scope">
          <i class="fas fa-trash"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageSocialPaymentsList',
  data: () => ({
    socialPaymentObject: []
  }),
  created () {
    this.$http.get('/api/social-payments')
      .then(res => {
        this.socialPaymentObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    getAllSocialPaymentObjectObject () {
      return this.socialPaymentObject
    }
  },
  methods: {
    onRowClick (row, event, column) {
      this.$router.push('/social-payment/update/' + row._id)
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

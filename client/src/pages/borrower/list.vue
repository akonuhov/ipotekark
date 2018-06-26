<template lang="html">
  <layouts-default>
    <h1>Список заемщиков</h1>
    <el-table
      :data="getAllBorrowersObject"
      empty-text="Список заемщиков пуст"
      @row-click="onRowClick">
      <el-table-column
        prop="_id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="passportData.fioImenitelny"
        label="Фамилия"
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
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageBorrowerList',
  data: () => ({
    borrowersObject: []
  }),
  created () {
    this.$http.get('/api/borrowers')
      .then(res => {
        this.borrowersObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onRowClick (row, event, column) {
      this.$router.push('/borrower/update/' + row._id)
    }
  },
  computed: {
    getAllBorrowersObject () {
      return this.borrowersObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

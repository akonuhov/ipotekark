<template lang="html">
  <layouts-default>
    <h1>Список заемщиков</h1>
    <el-table
      :data="getAllBorrowersObject"
      empty-text="Список заемщиков пуст">
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
import { HTTP } from '@/plugins/axios'
// import moment from 'moment'
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageBorrowerList',
  data: () => ({
    borrowersObject: []
  }),
  created () {
    HTTP.get(this.$config.config.apiUrl.borrowers.getAll)
      .then(res => {
        this.borrowersObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {

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

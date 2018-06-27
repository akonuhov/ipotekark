<template lang="html">
  <layouts-default>
    <h1>Список социальных выплат</h1>
    <el-table
      :data="getAllDocumentsObject"
      empty-text="Список документов пуст"
      @row-click="onRowClick">
      <el-table-column
        prop="name"
        label="Наименование документа"
        sortable>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageDocumentList',
  data: () => ({
    DocumentsObject: []
  }),
  created () {
    this.$http.get('/api/documents')
      .then(res => {
        this.socialPaymentObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    getAllDocumentsObject () {
      return this.DocumentsObject
    }
  },
  methods: {
    onRowClick (row, event, column) {
      this.$router.push('/documents/update/' + row._id)
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

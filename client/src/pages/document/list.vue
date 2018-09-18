<template lang="html">
  <layouts-default>
    <h1>Список социальных выплат</h1>
    <el-table
      :data="getAllDocumentsObject"
      empty-text="Список документов пуст">
      <el-table-column
        prop="name"
        label="Наименование документа"
        sortable>
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center"
        width="100px">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickDocumentEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickDocumentDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageDocumentList',
  computed: {
    getAllDocumentsObject () {
      return this.$store.state.document.list
    }
  },
  methods: {
    onClickDocumentEdit (id) {
      this.$router.push('/document/update/' + id)
    },
    onClickDocumentDelete (id) {
      this.$confirm('Вы точно хотите удалить документ из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('document/remove', id)
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

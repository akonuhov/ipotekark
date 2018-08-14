<template lang="html">
  <layouts-default>
    <h1>Список оценщиков</h1>
    <el-table
      :data="getAllEvaluatorObject"
      empty-text="Список операций пуст">
      <el-table-column
        prop="name"
        label="Наименование с указанием ОГРН и местонахождения"
        sortable>
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickEvaluatorEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickEvaluatorDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageEvaluatorList',
  methods: {
    onClickEvaluatorEdit (id) {
      this.$router.push('/evaluator/update/' + id)
    },
    onClickEvaluatorDelete (id) {
      this.$confirm('Вы точно хотите удалить оценщика из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('evaluator/remove', id)
      })
    }
  },
  computed: {
    getAllEvaluatorObject () {
      return this.$store.state.evaluator.list
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

<template lang="html">
  <layouts-default>
    <h1>Список продавцов/застройщиков</h1>
    <el-table
      :data="getAllProviderObject"
      empty-text="Список операций пуст">
      <el-table-column
        prop="name"
        label="Наименование с указанием ОГРН и местонахождения"
        sortable>
      </el-table-column>
      <el-table-column
        prop="landPlace.address"
        label="Адрес земельного участка"
        sortable>
      </el-table-column>
      <el-table-column
        label="Операции"
        align="center">
        <template slot-scope="scope">
          <i class="fas fa-user-edit" @click="onClickProviderEdit(scope.row._id)"></i>
          <i class="fas fa-trash" @click="onClickProviderDelete(scope.row._id)"></i>
        </template>
      </el-table-column>
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageProviderList',
  methods: {
    onClickProviderEdit (id) {
      this.$router.push('/provider/update/' + id)
    },
    onClickProviderDelete (id) {
      this.$confirm('Вы точно хотите удалить продавца/застройщика из базы данных', 'Предупреждение', {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('provider/remove', id)
      })
    }
  },
  computed: {
    getAllProviderObject () {
      return this.$store.state.provider.list
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

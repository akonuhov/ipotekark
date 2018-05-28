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
    </el-table>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageProviderList',
  data: () => ({
    providerObject: []
  }),
  created () {
    this.$http.get('/api/providers')
      .then(res => {
        this.providerObject = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    getAllProviderObject () {
      return this.providerObject
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
</style>

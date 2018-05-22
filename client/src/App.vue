<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "/assets/scss/index";
  #app {
    height: 100%;

    & > .el-container {
      height: 100%;
    }
  }
</style>

<template lang="html">
  <el-menu class="el-menu-vertical"
           :collapse="isCollapse"
           :collapse-transition="false"
           :router="true"
           background-color="#314D68"
           text-color="#fff"
           active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="fas fa-piggy-bank"></i>
        <span slot="title">Кредитные дела</span>
      </template>
      <el-menu-item index="1-1" route="/credit-object">
        <i class="fas fa-list-alt"></i>
        <span slot="title">Список кредитные дела</span>
      </el-menu-item>
      <el-menu-item index="1-2" route="/credit-object/create">
        <i class="fas fa-plus-square"></i>
        <span slot="title">Создать кредитное дело</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="fas fa-id-card"></i>
        <span slot="title">Заемщики</span>
      </template>
      <el-menu-item index="2-1" route="/borrower">
        <i class="fas fa-list-alt"></i>
        <span slot="title">Список заемщиков</span>
      </el-menu-item>
      <el-menu-item index="2-2" route="/borrower/create">
        <i class="fas fa-plus-square"></i>
        <span slot="title">Добавить заемщика</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="fas fa-file-alt"></i>
      <span slot="title">Документы</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="fas fa-database"></i>
        <span slot="title">Справочник</span>
      </template>
      <el-menu-item index="4-1">
        <i class="el-icon-setting"></i>
        <span slot="title">Продавцы/Застройщики</span>
      </el-menu-item>
      <el-menu-item index="4-2">
        <i class="el-icon-setting"></i>
        <span slot="title">Оценщики</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="5">
      <i class="fas fa-info-circle"></i>
      <span slot="title">Операции</span>
    </el-menu-item>
    <el-submenu index="6">
      <template slot="title">
        <i class="fas fa-user-tie"></i>
        <span slot="title">Сотрудники</span>
      </template>
      <el-menu-item index="6-1" route="/user">
        <i class="fas fa-list-alt"></i>
        <span slot="title">Список сотрудников</span>
      </el-menu-item>
      <el-menu-item index="6-2" route="/user/create">
        <i class="fas fa-list-alt"></i>
        <span slot="title">Добавить сотрудника</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'MenuLeft',
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="scss">
</style>

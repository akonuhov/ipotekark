<template lang="html">
  <el-container>
    <el-aside width="auto">
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
        <el-submenu index="3">
          <template slot="title">
            <i class="fas fa-hand-holding-usd"></i>
            <span slot="title">Социальные выплаты</span>
          </template>
          <el-menu-item index="3-1" route="/social-payment">
            <i class="fas fa-file-alt"></i>
            <span slot="title">Список социальных выплат</span>
          </el-menu-item>
          <el-menu-item index="3-2" route="/social-payment/create">
            <i class="fas fa-file-alt"></i>
            <span slot="title">Добавить социальную выплату</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="fas fa-file-alt"></i>
            <span slot="title">Документы</span>
          </template>
          <el-menu-item index="4-1" route="/document">
            <i class="fas fa-file-alt"></i>
            <span slot="title">Список документов</span>
          </el-menu-item>
          <el-menu-item index="4-2" route="/document/create">
            <i class="fas fa-file-alt"></i>
            <span slot="title">Добавить документ</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="fas fa-database"></i>
            <span slot="title">Справочник</span>
          </template>
          <el-submenu index="5-1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">Продавцы/Застройщики</span>
            </template>
            <el-menu-item index="5-1-1" route="/provider">
              <i class="fas fa-list-alt"></i>
              <span slot="title">Список продавцов/застройщиков</span>
            </el-menu-item>
            <el-menu-item index="5-1-2" route="/provider/create">
              <i class="fas fa-plus-square"></i>
              <span slot="title">Добавить продавца/застройщика</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5-2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">Оценщики</span>
            </template>
            <el-menu-item index="5-2-1" route="/evaluator">
              <i class="fas fa-list-alt"></i>
              <span slot="title">Список оценщиков</span>
            </el-menu-item>
            <el-menu-item index="5-2-2" route="/evaluator/create">
              <i class="fas fa-plus-square"></i>
              <span slot="title">Добавить оценщика</span>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="6" route="/history-operation">
          <i class="fas fa-info-circle"></i>
          <span slot="title">Операции</span>
        </el-menu-item>
        <el-submenu index="7">
          <template slot="title">
            <i class="fas fa-user-tie"></i>
            <span slot="title">Сотрудники</span>
          </template>
          <el-menu-item index="7-1" route="/user">
            <i class="fas fa-list-alt"></i>
            <span slot="title">Список сотрудников</span>
          </el-menu-item>
          <el-menu-item index="7-2" route="/user/create">
            <i class="fas fa-list-alt"></i>
            <span slot="title">Добавить сотрудника</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <i class="fas fa-bars el-header__menu-btn" @click="isCollapse = !isCollapse"></i>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer height="30px">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="50">
            <p>Автоматизированная информационная система документооборота © 2017. Все права защищены.</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutsDefault',
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="css">
</style>

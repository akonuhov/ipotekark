<template lang="html">
  <layouts-default>
    <h1>Введите даные о заемщике</h1>
    <el-form label-position="top" class="el-form--borrower">
      <el-card shadow="hover">
        <el-row :gutter="12">
          <el-col :span="24">
            <h3>Паспортные данные</h3>
          </el-col>
          <el-col :span="24">
            <el-row :gutter="20">
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Именительный">
                  <el-input v-model="borrowerObject.passportData.fioImenitelny" placeholder="ФИО Именительный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Родительный">
                  <el-input v-model="borrowerObject.passportData.fioRoditelny" placeholder="ФИО Родительный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Дательный">
                  <el-input v-model="borrowerObject.passportData.fioDatelny" placeholder="ФИО Дательный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Творительный">
                  <el-input v-model="borrowerObject.passportData.fioTvoritelny" placeholder="ФИО Творительный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5" :md="5" :sm="12" :xs="24">
                <el-form-item label="Дата рождения">
                  <el-date-picker
                    v-model="borrowerObject.passportData.dateBirth"
                    type="date"
                    placeholder="Дата рождения">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="3" :md="3" :sm="12" :xs="24">
                <el-form-item label="Пол">
                  <el-select v-model="borrowerObject.passportData.gender" placeholder="Пол">
                    <el-option label="Муж" value="male"></el-option>
                    <el-option label="Жен" value="female"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4" :md="4" :sm="12" :xs="24">
                <el-form-item label="Серия паспорта">
                  <el-input v-model="borrowerObject.passportData.passportSeries" placeholder="Серия паспорта"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4" :md="4" :sm="12" :xs="24">
                <el-form-item label="Номер паспорта">
                  <el-input v-model="borrowerObject.passportData.passportId" placeholder="Номер паспорта"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5" :md="5" :sm="12" :xs="24">
                <el-form-item label="Кем выдан">
                  <el-input v-model="borrowerObject.passportData.issuedBy" placeholder="Кем выдан"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3" :md="3" :sm="12" :xs="24">
                <el-form-item label="Код подразделения">
                  <el-input v-model="borrowerObject.passportData.unitCode" placeholder="Код подразделения"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" :md="24" :sm="24" :xs="24">
                <el-form-item label="Место рождения">
                  <el-input v-model="borrowerObject.passportData.placeBirth" placeholder="Место рождения"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <h3>Контактнае данные</h3>
            <el-form-item label="Телефон домашний">
              <el-input v-model="borrowerObject.contactData.phoneHome" placeholder="Телефон домашний"></el-input>
            </el-form-item>
            <el-form-item label="Телефон служебный">
              <el-input v-model="borrowerObject.contactData.phoneService" placeholder="Телефон служебный"></el-input>
            </el-form-item>
            <el-form-item label="Телефон мобильный">
              <el-input v-model="borrowerObject.contactData.phoneMobile" placeholder="Телефон мобильный"></el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="borrowerObject.contactData.email" placeholder="Email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <h3>Информация о доходе</h3>
            <el-form-item label="Основной доход">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-input v-model="borrowerObject.incomeData.basic" placeholder="Основной доход"></el-input>
                </el-col>
                <el-col :span="6">
                  <el-input v-model="borrowerObject.incomeData.basicDeduction" placeholder="Удержание"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="Доход по совместительству">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-input v-model="borrowerObject.incomeData.partTime" placeholder="Доход по совместительству"></el-input>
                </el-col>
                <el-col :span="6">
                  <el-input v-model="borrowerObject.incomeData.partTimeDeduction" placeholder="Удержание"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="Пенсия или степендия">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-input v-model="borrowerObject.incomeData.pension" placeholder="Пенсия или степендия"></el-input>
                </el-col>
                <el-col :span="6">
                  <el-input v-model="borrowerObject.incomeData.pensionDeduction" placeholder="Удержание"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="Чистый доход">
              <el-input v-model="borrowerObject.incomeData.sum" placeholder="Чистый доход"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <h3>Информация о расходах</h3>
            <el-form-item label="Совокупный расход">
              <el-input v-model="borrowerObject.aggregateExpense" placeholder="Совокупный расход"></el-input>
            </el-form-item>
            <h3>Информация о бансковском счете</h3>
            <el-form-item label="Номер счета">
              <el-input v-model="borrowerObject.bankData.accountNumber" placeholder="Номер счета"></el-input>
            </el-form-item>
            <el-form-item label="Реквизиты банка">
              <el-input v-model="borrowerObject.bankData.requisites" placeholder="Реквизиты банка"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="hover">
        <el-row :gutter="12">
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <h3>Место регистрации</h3>
            <el-row :gutter="12">
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Субъект">
                  <el-input v-model="borrowerObject.placeRegistration.subject" placeholder="Субъект"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Район">
                  <el-input v-model="borrowerObject.placeRegistration.district" placeholder="Район"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Тип населенного пункта">
                  <el-input v-model="borrowerObject.placeRegistration.typeSettlement" placeholder="Тип населенного пункта"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Населенный пункт">
                  <el-input v-model="borrowerObject.placeRegistration.locality" placeholder="Населенный пункт"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Тип части дорожной сети">
                  <el-input v-model="borrowerObject.placeRegistration.typeRoad" placeholder="Тип части дорожной сети"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Наименование части дорожной сети">
                  <el-input v-model="borrowerObject.placeRegistration.nameRoad" placeholder="Наименование части дорожной сети"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :md="8" :sm="12" :xs="24">
                <el-form-item label="Номер дома">
                  <el-input v-model="borrowerObject.placeRegistration.houseNumber" placeholder="Номер дома"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :md="8" :sm="12" :xs="24">
                <el-form-item label="Корпус">
                  <el-input v-model="borrowerObject.placeRegistration.housing" placeholder="Корпус"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :md="8" :sm="12" :xs="24">
                <el-form-item label="Номер квартиры">
                  <el-input v-model="borrowerObject.placeRegistration.apartmentNumber" placeholder="Номер квартиры"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <h3>
              Место проживания
              <el-switch
                v-model="switchPlaceResidence"
                active-text="Место регистрации"
                @change="setValutPlaceResidence">
              </el-switch>
            </h3>
            <el-row :gutter="12">
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Субъект">
                  <el-input v-model="borrowerObject.placeResidence.subject" placeholder="Субъект" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Район">
                  <el-input v-model="borrowerObject.placeResidence.district" placeholder="Район" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Тип населенного пункта">
                  <el-input v-model="borrowerObject.placeResidence.typeSettlement" placeholder="Тип населенного пункта" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Населенный пункт">
                  <el-input v-model="borrowerObject.placeResidence.locality" placeholder="Населенный пункт" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Тип части дорожной сети">
                  <el-input v-model="borrowerObject.placeResidence.typeRoad" placeholder="Тип части дорожной сети" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Наименование части дорожной сети">
                  <el-input v-model="borrowerObject.placeResidence.nameRoad" placeholder="Наименование части дорожной сети" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :md="8" :sm="12" :xs="24">
                <el-form-item label="Номер дома">
                  <el-input v-model="borrowerObject.placeResidence.houseNumber" placeholder="Номер дома" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :md="8" :sm="12" :xs="24">
                <el-form-item label="Корпус">
                  <el-input v-model="borrowerObject.placeResidence.housing" placeholder="Корпус" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :md="8" :sm="12" :xs="24">
                <el-form-item label="Номер квартиры">
                  <el-input v-model="borrowerObject.placeResidence.apartmentNumber" placeholder="Номер квартиры" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter="12">
        <el-col :span="24">
          <el-button type="success" @click="onCreateBorrower">Добавить</el-button>
          <el-button>Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageBorrowerCreate',
  data: () => ({
    borrowerObject: {
      passportData: {
        fioImenitelny: null,
        fioRoditelny: null,
        fioDatelny: null,
        fioTvoritelny: null,
        dateBirth: null,
        gender: null,
        passportSeries: null,
        passportId: null,
        issuedBy: null,
        unitCode: null,
        placeBirth: null
      },
      contactData: {
        phoneHome: null,
        phoneService: null,
        phoneMobile: null,
        email: null
      },
      bankData: {
        accountNumber: null,
        requisites: null
      },
      incomeData: {
        basic: null,
        basicDeduction: null,
        partTime: null,
        partTimeDeduction: null,
        pension: null,
        pensionDeduction: null,
        sum: null
      },
      aggregateExpense: null,
      placeRegistration: {
        subject: null,
        district: null,
        typeSettlement: null,
        locality: null,
        typeRoad: null,
        nameRoad: null,
        houseNumber: null,
        housing: null,
        apartmentNumber: null
      },
      placeResidence: {
        subject: null,
        district: null,
        typeSettlement: null,
        locality: null,
        typeRoad: null,
        nameRoad: null,
        houseNumber: null,
        housing: null,
        apartmentNumber: null
      }
    },
    switchPlaceResidence: false
  }),
  methods: {
    setValutPlaceResidence () {
      for (let item in this.borrowerObject.placeResidence) {
        if (this.switchPlaceResidence === true) {
          this.borrowerObject.placeResidence[item] = this.borrowerObject.placeRegistration[item]
        } else {
          this.borrowerObject.placeResidence[item] = null
        }
      }
    },
    onCreateBorrower () {
      this.$http.post(this.$config.config.apiUrl.borrowers.add, this.borrowerObject)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
.el-form--borrower {
  .el-form-item {
    &__content {
      .el-date-editor {
        width: 100%;
      }
      .el-select {
        width: 100%;
      }
    }
  }
}
</style>

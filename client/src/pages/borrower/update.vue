<template lang="html">
  <layouts-default>
    <h1>Введите даные о заемщике</h1>
    <el-form :model="borrowerObject" :rules="rules" ref="borrowerObjectForm" label-position="top" class="el-form--borrower">
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="24">
            <h3>Паспортные данные</h3>
          </el-col>
          <el-col :span="24">
            <el-row :gutter="20">
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Именительный" prop="passportData.fioImenitelny">
                  <el-input v-model="borrowerObject.passportData.fioImenitelny" placeholder="ФИО Именительный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Родительный" prop="passportData.fioRoditelny">
                  <el-input v-model="borrowerObject.passportData.fioRoditelny" placeholder="ФИО Родительный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Дательный" prop="passportData.fioDatelny">
                  <el-input v-model="borrowerObject.passportData.fioDatelny" placeholder="ФИО Дательный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="ФИО Творительный" prop="passportData.fioTvoritelny">
                  <el-input v-model="borrowerObject.passportData.fioTvoritelny" placeholder="ФИО Творительный"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5" :md="5" :sm="12" :xs="24">
                <el-form-item label="Дата рождения" prop="passportData.dateBirth">
                  <el-date-picker
                    v-model="borrowerObject.passportData.dateBirth"
                    type="date"
                    placeholder="Дата рождения">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="3" :md="3" :sm="12" :xs="24">
                <el-form-item label="Пол" prop="passportData.gender">
                  <el-select v-model="borrowerObject.passportData.gender" placeholder="Пол">
                    <el-option label="Муж" value="male"></el-option>
                    <el-option label="Жен" value="female"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4" :md="4" :sm="12" :xs="24">
                <el-form-item label="Серия паспорта" prop="passportData.passportSeries">
                  <el-input v-model="borrowerObject.passportData.passportSeries" placeholder="Серия паспорта"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4" :md="4" :sm="12" :xs="24">
                <el-form-item label="Номер паспорта" prop="passportData.passportId">
                  <el-input v-model="borrowerObject.passportData.passportId" placeholder="Номер паспорта"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5" :md="5" :sm="12" :xs="24">
                <el-form-item label="Кем выдан" prop="passportData.issuedBy">
                  <el-input v-model="borrowerObject.passportData.issuedBy" placeholder="Кем выдан"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3" :md="3" :sm="12" :xs="24">
                <el-form-item label="Код подразделения" prop="passportData.unitCode">
                  <el-input v-model="borrowerObject.passportData.unitCode" placeholder="Код подразделения"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" :md="24" :sm="24" :xs="24">
                <el-form-item label="Место рождения" prop="passportData.placeBirth">
                  <el-input v-model="borrowerObject.passportData.placeBirth" placeholder="Место рождения"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card>
        <el-row :gutter="20">
          <el-col :span="24" :md="24" :sm="24" :xs="24">
            <h3>Долевое участие</h3>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Доля в праве собственности, %" prop="share.shareInOwnership">
              <el-input-number v-model="borrowerObject.share.shareInOwnership" controls-position="right" :max="100"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <h3>Контактнае данные</h3>
            <el-form-item label="Телефон домашний" prop="contactData.phoneHome">
              <el-input v-model="borrowerObject.contactData.phoneHome" placeholder="Телефон домашний"></el-input>
            </el-form-item>
            <el-form-item label="Телефон служебный" prop="contactData.phoneService">
              <el-input v-model="borrowerObject.contactData.phoneService" placeholder="Телефон служебный"></el-input>
            </el-form-item>
            <el-form-item label="Телефон мобильный" prop="contactData.phoneMobile">
              <el-input v-model="borrowerObject.contactData.phoneMobile" placeholder="Телефон мобильный"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="contactData.email">
              <el-input v-model="borrowerObject.contactData.email" placeholder="Email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <h3>Информация о доходе</h3>
            <el-row :gutter="20">
              <el-col :span="16">
                <el-form-item label="Основной доход" prop="incomeData.basic">
                  <el-input-number v-model="borrowerObject.incomeData.basic" :step="500" controls-position="right"></el-input-number>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Удержание" prop="incomeData.basicDeduction">
                  <el-input-number v-model="borrowerObject.incomeData.basicDeduction" :max="100" controls-position="right"></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="16">
                <el-form-item label="Доход по совместительству">
                  <el-input-number v-model="borrowerObject.incomeData.partTime" :step="500" controls-position="right"></el-input-number>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Удержание">
                  <el-input-number v-model="borrowerObject.incomeData.partTimeDeduction" :max="100" controls-position="right"></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="16">
                <el-form-item label="Пенсия или степендия">
                  <el-input-number v-model="borrowerObject.incomeData.pension" :step="500" controls-position="right"></el-input-number>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Удержание">
                  <el-input-number v-model="borrowerObject.incomeData.pensionDeduction" :max="100" controls-position="right"></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="Чистый доход">
              <el-input v-model="borrowerObject.incomeData.sum" placeholder="Чистый доход" readonly></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <h3>Информация о расходах</h3>
            <el-form-item label="Совокупный расход" prop="aggregateExpense">
              <el-input-number v-model="borrowerObject.aggregateExpense" :step="500" controls-position="right"></el-input-number>
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
        <el-row :gutter="20">
          <el-col :span="12" :md="12" :sm="12" :xs="24">
            <h3>Место регистрации</h3>
            <el-row :gutter="20">
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Субъект" prop="placeRegistration.subject">
                  <el-input v-model="borrowerObject.placeRegistration.subject" placeholder="Субъект"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Район">
                  <el-input v-model="borrowerObject.placeRegistration.district" placeholder="Район"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Тип населенного пункта" prop="placeRegistration.typeSettlement">
                  <el-input v-model="borrowerObject.placeRegistration.typeSettlement" placeholder="Тип населенного пункта"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Населенный пункт" prop="placeRegistration.locality">
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
            <el-row :gutter="20">
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Субъект" prop="placeResidence.subject">
                  <el-input v-model="borrowerObject.placeResidence.subject" placeholder="Субъект" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Район">
                  <el-input v-model="borrowerObject.placeResidence.district" placeholder="Район" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Тип населенного пункта" prop="placeResidence.typeSettlement">
                  <el-input v-model="borrowerObject.placeResidence.typeSettlement" placeholder="Тип населенного пункта" :disabled="switchPlaceResidence"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" :md="12" :sm="12" :xs="24">
                <el-form-item label="Населенный пункт" prop="placeResidence.locality">
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
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="success" @click="onUpdateBorrower">Обновить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
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
      share: {
        shareInOwnership: null
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
        basicTotal: null,
        partTime: null,
        partTimeDeduction: null,
        partTimeTotal: null,
        pension: null,
        pensionDeduction: null,
        pensionTotal: null,
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
    switchPlaceResidence: false,
    rules: {
      passportData: {
        fioImenitelny: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        fioRoditelny: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        fioDatelny: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        fioTvoritelny: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        dateBirth: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        gender: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        passportSeries: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        passportId: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        issuedBy: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        unitCode: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        placeBirth: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      },
      share: {
        shareInOwnership: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      },
      contactData: {
        phoneHome: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        phoneService: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        phoneMobile: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        email: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      },
      incomeData: {
        basic: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        basicDeduction: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        partTime: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        partTimeDeduction: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        pension: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        pensionDeduction: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        sum: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      },
      aggregateExpense: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      placeRegistration: {
        subject: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        typeSettlement: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        locality: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      },
      placeResidence: {
        subject: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        typeSettlement: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        locality: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      }
    }
  }),
  created () {
    this.borrowerObject = this.$store.state.borrower.list.find(item => item._id === this.$route.params.id)
  },
  watch: {
    'borrowerObject.incomeData.basic' () {
      if (this.borrowerObject.incomeData.basicDeduction > 0) {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic - (this.borrowerObject.incomeData.basic * this.borrowerObject.incomeData.basicDeduction / 100)
      } else {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.basicDeduction' () {
      if (this.borrowerObject.incomeData.basicDeduction > 0) {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic - (this.borrowerObject.incomeData.basic * this.borrowerObject.incomeData.basicDeduction / 100)
      } else {
        this.borrowerObject.incomeData.basicTotal = this.borrowerObject.incomeData.basic
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.partTime' () {
      if (this.borrowerObject.incomeData.partTimeDeduction > 0) {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime - (this.borrowerObject.incomeData.partTime * this.borrowerObject.incomeData.partTimeDeduction / 100)
      } else {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.partTimeDeduction' () {
      if (this.borrowerObject.incomeData.partTimeDeduction > 0) {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime - (this.borrowerObject.incomeData.partTime * this.borrowerObject.incomeData.partTimeDeduction / 100)
      } else {
        this.borrowerObject.incomeData.partTimeTotal = this.borrowerObject.incomeData.partTime
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.pension' () {
      if (this.borrowerObject.incomeData.pensionDeduction > 0) {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension - (this.borrowerObject.incomeData.pension * this.borrowerObject.incomeData.pensionDeduction / 100)
      } else {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.incomeData.pensionDeduction' () {
      if (this.borrowerObject.incomeData.pensionDeduction > 0) {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension - (this.borrowerObject.incomeData.pension * this.borrowerObject.incomeData.pensionDeduction / 100)
      } else {
        this.borrowerObject.incomeData.pensionTotal = this.borrowerObject.incomeData.pension
      }
      this.setIncomeDataSum()
    },
    'borrowerObject.aggregateExpense' () {
      this.setIncomeDataSum()
    }
  },
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
    onClickButtonBack () {
      this.$router.push('/borrower')
    },
    onUpdateBorrower () {
      this.$refs['borrowerObjectForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('borrower/update', [this.borrowerObject, this.$route.params.id])
        } else {
          return false
        }
      })
    },
    setIncomeDataSum () {
      this.borrowerObject.incomeData.sum = this.borrowerObject.incomeData.basicTotal + this.borrowerObject.incomeData.partTimeTotal + this.borrowerObject.incomeData.pensionTotal - this.borrowerObject.aggregateExpense
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
      .el-input-number {
        width: 100%;
      }
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

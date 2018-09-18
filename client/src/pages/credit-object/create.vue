<template lang="html">
  <layouts-default>
    <h1>Введите данные о кредитном деле</h1>
    <el-form :model="creditObject" :rules="rules" ref="creditObjectForm" label-position="top" class="el-form--credit-object">
      <div class="substrate">
        <el-row :gutter="20">
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Номер кредитного дела" prop="id">
              <el-input placeholder="Номер кредитного дела" v-model="creditObject.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Заемщик" prop="borrowerId">
              <el-select v-model="creditObject.borrowerId" placeholder="Заемщик">
                <el-option
                  v-for="(item, index) in getAllBorrowerObject"
                  :key="index"
                  :label="item.passportData.fioImenitelny"
                  :value="item.passportData.fioImenitelny">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Продавцы/Застройщики">
              <el-select v-model="creditObject.providerId" placeholder="Продавцы/Застройщики">
                <el-option
                  v-for="(item, index) in getAllProviderObject"
                  :key="index"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Оценщики">
              <el-select v-model="creditObject.evaluatorId" placeholder="Оценщики">
                <el-option
                  v-for="(item, index) in getAllEvaluatorObject"
                  :key="index"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Размер кредита" prop="amountCredit">
              <el-input-number v-model="creditObject.amountCredit" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Срок кредитования, мес" prop="timeCredit">
              <el-input-number v-model="creditObject.timeCredit" :min="36" :max="360" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Стоимость кв. м">
              <el-input-number v-model="creditObject.costSquareMeter" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Общая площадь квартиры">
              <el-input-number v-model="creditObject.totaAareAapartment" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Стоимость квартиры">
              <el-input-number v-model="creditObject.costApartment" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Первоначальный взнос">
              <el-input-number v-model="creditObject.initialFee" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Процентная ставка" prop="percentRate">
              <el-select v-model="creditObject.percentRate" placeholder="Процентная ставка">
                <el-option
                  v-for="item in optionsPercentRate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Полная стоимость займа">
              <el-input-number v-model="creditObject.totalLoanValue" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Оценочная стоимость квартиры">
              <el-input-number v-model="creditObject.estimatedCostApartment" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Количество иждивенцев" prop="numberDependents">
              <el-input-number v-model="creditObject.numberDependents" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Возраст на момент погашения кредита">
              <el-input readonly placeholder="Возраст на момент погашения кредита" v-model="creditObject.ageOnMomentEndCredit"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Ежемесячный платеж">
              <el-input-number v-model="creditObject.monthlyPayment" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата договора займа">
              <el-date-picker
                v-model="creditObject.dateLoanAgreement"
                type="date"
                placeholder="Дата договора займа">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер договора приобретения">
              <el-input v-model="creditObject.purchaseAgreementNumber" placeholder="Номер договора приобретения"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер отчета об оценке">
              <el-input v-model="creditObject.numberEvaluationReport" placeholder="Номер отчета об оценке"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата отчета об оценке">
              <el-date-picker
                v-model="creditObject.dateEvaluationReport"
                type="date"
                placeholder="Дата отчета об оценке">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="success" @click="onCreateCredirObject">Добавить</el-button>
          <el-button @click="onClickButtonBack">Назад</el-button>
        </el-col>
      </el-row>
    </el-form>
  </layouts-default>
</template>

<script>
import LayoutsDefault from '@/layouts/default'
export default {
  name: 'PageCreditObjectCreate',
  data: () => ({
    creditObject: {
      id: null,
      status: null,
      borrowerId: null,
      providerId: null,
      evaluatorId: null,
      amountCredit: null,
      timeCredit: null,
      costSquareMeter: null,
      totaAareAapartment: null,
      costApartment: null,
      initialFee: null,
      percentRate: null,
      totalLoanValue: null,
      estimatedCostApartment: null,
      numberDependents: null,
      ageOnMomentEndCredit: null,
      monthlyPayment: null,
      dateLoanAgreement: null,
      purchaseAgreementNumber: null,
      numberEvaluationReport: null,
      dateEvaluationReport: null
    },
    optionsPercentRate: [{
      value: '13',
      label: '13%'
    }, {
      value: '12',
      label: '12%'
    }, {
      value: '11',
      label: '11%'
    }],
    optionsBorrower: [],
    optionsProvider: [],
    optionsEvaluator: [],
    rules: {
      id: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      status: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      borrowerId: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      amountCredit: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      timeCredit: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      percentRate: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      numberDependents: {
        required: true,
        message: 'Поле обязательно для заполнения',
        trigger: 'change'
      },
      socialPayments: {
        category: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        numberCitizensRegister: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        totalAreaPlaceRegistration: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        numberRegisteredPersons: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        provideCitizenArea: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        nameRegistrationCertificate: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        registrationCertificateNumber: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        dateRegistrationCertificate: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        numberCohabitingFamilyMembers: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        familyCertificateReference: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        familyCertificateNumber: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        dateCertificateFamily: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        cohabitingFamilyMembers: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        nameCertificateFromBank: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        numberCertificateFromBank: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        dateCertificateFromBank: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        nameEmployer: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        certificateNumberFromWork: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        dateCertificateFromWork: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        positionWithIndicationEmployer: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        nameDocumentConfirmingApprovalLoan: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        approvalNumber: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        approvalDate: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        categoryRecipientSocialBenefits: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        },
        totalAmountSocialPayment: {
          required: true,
          message: 'Поле обязательно для заполнения',
          trigger: 'change'
        }
      }
    }
  }),
  created () {
    this.optionsBorrower = this.$store.state.borrower.list
    this.optionsProvider = this.$store.state.provider.list
    this.optionsEvaluator = this.$store.state.evaluator.list
  },
  methods: {
    onCreateCredirObject () {
      this.$refs['creditObjectForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('creditObject/create', this.creditObject)
        } else {
          return false
        }
      })
    },
    onClickButtonBack () {
      this.$router.push('/credit-object')
    }
  },
  computed: {
    getAllBorrowerObject () {
      return this.optionsBorrower
    },
    getAllProviderObject () {
      return this.optionsProvider
    },
    getAllEvaluatorObject () {
      return this.optionsEvaluator
    }
  },
  components: {
    LayoutsDefault
  }
}
</script>

<style lang="scss">
.el-form--credit-object {
  .el-form-item {
    &__content {
      .el-input-number {
        width: 100%;
      }
      .el-select {
        width: 100%;
      }
      .el-date-editor {
        width: 100%;
      }
    }
  }
}
.el-select-dropdown {
  max-width: 40%;
}
</style>

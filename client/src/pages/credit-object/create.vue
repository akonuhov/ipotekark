<template lang="html">
  <layouts-default>
    <h1>Введите данные о кредитном деле</h1>
    <el-form label-position="top" class="el-form--credit-object">
      <div class="substrate">
        <el-row :gutter="12">
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Номер кредитного дела">
              <el-input placeholder="Номер кредитного дела" v-model="creditObject.id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Заемщик">
              <el-select v-model="creditObject.borrowerId" placeholder="Заемщик">
                <el-option
                  v-for="item in getAllBorrowersObject"
                  :key="item._id"
                  :label="item.passportData.lastName + ' ' + item.passportData.firstName + ' ' + item.passportData.middleName"
                  :value="item._id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Продавцы/Застройщики">
              <el-select v-model="creditObject.providerId" placeholder="Продавцы/Застройщики">
                <el-option
                  v-for="item in optionsProvider"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :md="6" :sm="12" :xs="24">
            <el-form-item label="Оценщики">
              <el-select v-model="creditObject.evaluatorId" placeholder="Оценщики">
                <el-option
                  v-for="item in optionsEvaluator"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-card shadow="hover">
        <el-row :gutter="12">
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Размер кредита">
              <el-input-number v-model="creditObject.amountCredit" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Срок кредитования, мес">
              <el-input-number v-model="creditObject.timeCredit" controls-position="right" :min="36" :max="360"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Стоимость кв. м">
              <el-input-number v-model="creditObject.costSquareMeter" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Общая площадь квартиры">
              <el-input-number v-model="creditObject.totaAareAapartment" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Стоимость квартиры">
              <el-input-number v-model="creditObject.costApartment" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Первоначальный взнос">
              <el-input-number v-model="creditObject.initialFee" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Процентная ставка">
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
              <el-input-number v-model="creditObject.totalLoanValue" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Оценочная стоимость квартиры">
              <el-input-number v-model="creditObject.estimatedCostApartment" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Количество иждивенцев">
              <el-input-number v-model="creditObject.numberDependents" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Возраст на момент погашения кредита">
              <el-input readonly placeholder="Возраст на момент погашения кредита" v-model="creditObject.ageOnMomentEndCredit"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Ежемесячный платеж">
              <el-input-number v-model="creditObject.monthlyPayment" controls-position="right"></el-input-number>
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
        </el-row>
      </el-card>
      <el-card shadow="hover">
        <el-row :gutter="12">
          <el-col :span="24">
            <h3>Социальные выплаты</h3>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Категория соц. выплаты">
              <el-select v-model="creditObject.socialPayments.category" placeholder="Категория соц. выплаты">
                <el-option
                  v-for="item in optionsSocialPayments"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :title="item.label">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер в реестре граждан">
              <el-input placeholder="Номер в реестре граждан" v-model="creditObject.socialPayments.numberCitizensRegister"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Общая площадь по месту регистрации, кв. м">
              <el-input-number v-model="creditObject.socialPayments.totalAreaPlaceRegistration" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Количество зарегистрированных лиц">
              <el-input-number v-model="creditObject.socialPayments.numberRegisteredPersons" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Обеспеченность площадью гражданина, кв. м">
              <el-input-number v-model="creditObject.socialPayments.provideCitizenArea" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование справки о регистрации">
              <el-input placeholder="Наименование справки о регистрации" v-model="creditObject.socialPayments.nameRegistrationCertificate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки регистрации">
              <el-input placeholder="Номер справки регистрации" v-model="creditObject.socialPayments.registrationCertificateNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки о регистрации">
              <el-date-picker
                v-model="creditObject.socialPayments.dateRegistrationCertificate"
                type="date"
                placeholder="Дата справки о регистрации">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Количество совместно проживающих членов семьи">
              <el-input-number v-model="creditObject.socialPayments.numberCohabitingFamilyMembers" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование справки о составе семьи">
              <el-input placeholder="Наименование справки о составе семьи" v-model="creditObject.socialPayments.familyCertificateReference"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки о составе семьи">
              <el-input placeholder="Номер справки о составе семьи" v-model="creditObject.socialPayments.familyCertificateNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки о составе семьи">
              <el-date-picker
                v-model="creditObject.socialPayments.dateCertificateFamily"
                type="date"
                placeholder="Дата справки о составе семьи">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Совместно проживающие члены семьи (перечислить через ,)">
              <el-input placeholder="Совместно проживающие члены семьи (перечислить через ,)" v-model="creditObject.socialPayments.cohabitingFamilyMembers"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование справки из банка">
              <el-input placeholder="Наименование справки из банка" v-model="creditObject.socialPayments.nameCertificateFromBank"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки из банка">
              <el-input placeholder="Номер справки из банка" v-model="creditObject.socialPayments.numberCertificateFromBank"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки из банка">
              <el-date-picker
                v-model="creditObject.socialPayments.dateCertificateFromBank"
                type="date"
                placeholder="Дата справки из банка">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование работодателя">
              <el-input placeholder="Наименование работодателя" v-model="creditObject.socialPayments.nameEmployer"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки с места работы">
              <el-input placeholder="Номер справки с места работы" v-model="creditObject.socialPayments.certificateNumberFromWork"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки с места работы">
              <el-date-picker
                v-model="creditObject.socialPayments.dateCertificateFromWork"
                type="date"
                placeholder="Дата справки с места работы">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Должность (в родительном падеже) с указанием работодателя">
              <el-input placeholder="Должность (в родительном падеже) с указанием работодателя" v-model="creditObject.socialPayments.positionWithIndicationEmployer"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование документа подтверждающего одобрение по кредиту">
              <el-input placeholder="Наименование документа подтверждающего одобрение по кредиту" v-model="creditObject.socialPayments.nameDocumentConfirmingApprovalLoan"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер одобрения">
              <el-input placeholder="Номер одобрения" v-model="creditObject.socialPayments.approvalNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата одобрения">
              <el-date-picker
                v-model="creditObject.socialPayments.approvalDate"
                type="date"
                placeholder="Дата одобрения">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Категория получателя соц. выплаты">
              <el-input placeholder="Категория получателя соц. выплаты" v-model="creditObject.socialPayments.categoryRecipientSocialBenefits"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Итоговая сумма социальной выплаты">
              <el-input placeholder="Итоговая сумма социальной выплаты" v-model="creditObject.socialPayments.totalAmountSocialPayment"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row :gutter="12">
        <el-col :span="24">
          <el-button type="success" @click="onCreateCredirObject">Добавить</el-button>
          <el-button>Назад</el-button>
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
      socialPayments: {
        category: null,
        numberCitizensRegister: null,
        totalAreaPlaceRegistration: null,
        numberRegisteredPersons: null,
        provideCitizenArea: null,
        nameRegistrationCertificate: null,
        registrationCertificateNumber: null,
        dateRegistrationCertificate: null,
        numberCohabitingFamilyMembers: null,
        familyCertificateReference: null,
        familyCertificateNumber: null,
        dateCertificateFamily: null,
        cohabitingFamilyMembers: null,
        nameCertificateFromBank: null,
        numberCertificateFromBank: null,
        dateCertificateFromBank: null,
        nameEmployer: null,
        certificateNumberFromWork: null,
        dateCertificateFromWork: null,
        positionWithIndicationEmployer: null,
        nameDocumentConfirmingApprovalLoan: null,
        approvalNumber: null,
        approvalDate: null,
        categoryRecipientSocialBenefits: null,
        totalAmountSocialPayment: null
      }
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
    optionsSocialPayments: [
      {
        value: 'Граждане, состоящие на учете в качестве нуждающихся в жилых помещениях, предоставляемых по договорам социального найма',
        label: 'Граждане, состоящие на учете в качестве нуждающихся в жилых помещениях, предоставляемых по договорам социального найма'
      },
      {
        value: 'Граждане, для которых работа в государственных и муниципальных учреждениях, являющихся научными организациями или организациями научного обслуживания, в государственных и муниципальных образовательных учреждениях, государственных и муниципальных учреждениях здравоохранения, культуры, социальной защиты, занятости населения, физической культуры и спорта является основным местом работы',
        label: 'Граждане, для которых работа в государственных и муниципальных учреждениях, являющихся научными организациями или организациями научного обслуживания, в государственных и муниципальных образовательных учреждениях, государственных и муниципальных учреждениях здравоохранения, культуры, социальной защиты, занятости населения, физической культуры и спорта является основным местом работы'
      },
      {
        value: 'Молодая семья',
        label: 'Молодая семья'
      },
      {
        value: 'Граждане, для которых работа в федеральных органах государственной власти, органах государственной власти Республики Крым, органах местного самоуправления является основным местом работы',
        label: 'Граждане, для которых работа в федеральных органах государственной власти, органах государственной власти Республики Крым, органах местного самоуправления является основным местом работы'
      },
      {
        value: 'Граждане, имеющие двух и более несовершеннолетних детей и являющиеся получателями материнского (семейного) капитала',
        label: 'Граждане, имеющие двух и более несовершеннолетних детей и являющиеся получателями материнского (семейного) капитала'
      },
      {
        value: 'Работники предприятий, учреждений, организаций, учредителями которых являются исполнительные органы государственной власти Республики Крым',
        label: 'Работники предприятий, учреждений, организаций, учредителями которых являются исполнительные органы государственной власти Республики Крым'
      },
      {
        value: 'Граждане, имеющие обеспеченность общей площадью жилых помещений не более 18 квадратных метров в расчете на гражданина и каждого совместно проживающего с гражданином члена его семьи',
        label: 'Граждане, имеющие обеспеченность общей площадью жилых помещений не более 18 квадратных метров в расчете на гражданина и каждого совместно проживающего с гражданином члена его семьи'
      },
      {
        value: 'Инвалиды',
        label: 'Инвалиды'
      },
      {
        value: 'Многодетная семья',
        label: 'Многодетная семья'
      }
    ]
  }),
  created () {
    this.$http.get(this.$config.config.apiUrl.borrowers.getAll)
      .then(res => {
        this.optionsBorrower = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onCreateCredirObject () {
      this.$http.post(this.$config.config.apiUrl.creditObject.add, this.creditObject)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    getAllBorrowersObject () {
      return this.optionsBorrower
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

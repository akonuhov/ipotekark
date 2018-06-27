<template lang="html">
  <layouts-default>
    <h1>Введите данные о социальной выплате</h1>
    <el-form :model="socialPaymentsObject" ref="socialPaymentsObjectForm" label-position="top" class="el-form--credit-object">
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :span="24">
            <h3>Социальные выплаты</h3>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Заемщик">
              <el-select v-model="socialPaymentsObject.borrowerId" placeholder="Заемщик">
                <el-option
                  v-for="(item, index) in getAllBorrowerObject"
                  :key="index"
                  :label="item.passportData.fioImenitelny"
                  :value="item._id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Категория соц. выплаты">
              <el-select v-model="socialPaymentsObject.category" placeholder="Категория соц. выплаты">
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
              <el-input v-model="socialPaymentsObject.numberCitizensRegister" :min="0" placeholder="Номер в реестре граждан"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Общая площадь по месту регистрации, кв. м">
              <el-input-number v-model="socialPaymentsObject.totalAreaPlaceRegistration" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Количество зарегистрированных лиц">
              <el-input-number v-model="socialPaymentsObject.numberRegisteredPersons" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Обеспеченность площадью гражданина, кв. м">
              <el-input-number v-model="socialPaymentsObject.provideCitizenArea" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование справки о регистрации">
              <el-input placeholder="Наименование справки о регистрации" v-model="socialPaymentsObject.nameRegistrationCertificate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки регистрации">
              <el-input placeholder="Номер справки регистрации" v-model="socialPaymentsObject.registrationCertificateNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки о регистрации">
              <el-date-picker
                v-model="socialPaymentsObject.dateRegistrationCertificate"
                type="date"
                placeholder="Дата справки о регистрации">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Количество совместно проживающих членов семьи">
              <el-input-number v-model="socialPaymentsObject.numberCohabitingFamilyMembers" :min="0" controls-position="right"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование справки о составе семьи">
              <el-input placeholder="Наименование справки о составе семьи" v-model="socialPaymentsObject.familyCertificateReference"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки о составе семьи">
              <el-input placeholder="Номер справки о составе семьи" v-model="socialPaymentsObject.familyCertificateNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки о составе семьи">
              <el-date-picker
                v-model="socialPaymentsObject.dateCertificateFamily"
                type="date"
                placeholder="Дата справки о составе семьи">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Совместно проживающие члены семьи (перечислить через ,)">
              <el-input placeholder="Совместно проживающие члены семьи (перечислить через ,)" v-model="socialPaymentsObject.cohabitingFamilyMembers"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование справки из банка">
              <el-input placeholder="Наименование справки из банка" v-model="socialPaymentsObject.nameCertificateFromBank"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки из банка">
              <el-input placeholder="Номер справки из банка" v-model="socialPaymentsObject.numberCertificateFromBank"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки из банка">
              <el-date-picker
                v-model="socialPaymentsObject.dateCertificateFromBank"
                type="date"
                placeholder="Дата справки из банка">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование работодателя">
              <el-input placeholder="Наименование работодателя" v-model="socialPaymentsObject.nameEmployer"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер справки с места работы">
              <el-input placeholder="Номер справки с места работы" v-model="socialPaymentsObject.certificateNumberFromWork"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата справки с места работы">
              <el-date-picker
                v-model="socialPaymentsObject.dateCertificateFromWork"
                type="date"
                placeholder="Дата справки с места работы">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Должность (в родительном падеже) с указанием работодателя">
              <el-input placeholder="Должность (в родительном падеже) с указанием работодателя" v-model="socialPaymentsObject.positionWithIndicationEmployer"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Наименование документа подтверждающего одобрение по кредиту">
              <el-input placeholder="Наименование документа подтверждающего одобрение по кредиту" v-model="socialPaymentsObject.nameDocumentConfirmingApprovalLoan"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Номер одобрения">
              <el-input placeholder="Номер одобрения" v-model="socialPaymentsObject.approvalNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Дата одобрения">
              <el-date-picker
                v-model="socialPaymentsObject.approvalDate"
                type="date"
                placeholder="Дата одобрения">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Категория получателя соц. выплаты">
              <el-input placeholder="Категория получателя соц. выплаты" v-model="socialPaymentsObject.categoryRecipientSocialBenefits"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :md="8" :sm="12" :xs="24">
            <el-form-item label="Итоговая сумма социальной выплаты">
              <el-input-number v-model="socialPaymentsObject.totalAmountSocialPayment" :min="0" controls-position="right"></el-input-number>
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
  name: 'PageSocialPaymentsObjectCreate',
  data: () => ({
    socialPaymentsObject: {
      borrowerId: null,
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
    },
    optionsBorrower: [],
    optionsSocialPayments: [
      {
        value: 'Медицинские работники',
        label: 'Медицинские работники'
      },
      {
        value: 'Педагоги, основным местом работы которых является работа в расположенных на территории Республики Крым федеральных, государственных и муниципальных образовательных учреждениях',
        label: 'Педагоги, основным местом работы которых является работа в расположенных на территории Республики Крым федеральных, государственных и муниципальных образовательных учреждениях'
      },
      {
        value: 'Государственные служащие, осуществляющие профессиональную служебную деятельность на территории Республики Крым',
        label: 'Государственные служащие, осуществляющие профессиональную служебную деятельность на территории Республики Крым'
      },
      {
        value: 'Муниципальные служащие в Республике Крым',
        label: 'Муниципальные служащие в Республике Крым'
      },
      {
        value: 'Работники физической культуры и спорта',
        label: 'Работники физической культуры и спорта'
      },
      {
        value: 'Работники социальной защиты, занятости населения',
        label: 'Работники социальной защиты, занятости населения'
      },
      {
        value: 'Работники культуры',
        label: 'Работники культуры'
      },
      {
        value: 'Работники предприятий, учреждений, организаций, учредителями которых являются исполнительные органы государственной власти Республики Крым или органы местного самоуправления муниципальных образований в Республике Крым',
        label: 'Работники предприятий, учреждений, организаций, учредителями которых являются исполнительные органы государственной власти Республики Крым или органы местного самоуправления муниципальных образований в Республике Крым'
      },
      {
        value: 'Инвалиды и семьи, имеющие детей-инвалидов',
        label: 'Инвалиды и семьи, имеющие детей-инвалидов'
      },
      {
        value: 'Семьи имеющие трех и более детей',
        label: 'Семьи имеющие трех и более детей'
      },
      {
        value: 'Молодые семьи, где возраст каждого из супругов либо одного родителя в неполной семье не превышает 35 лет',
        label: 'Молодые семьи, где возраст каждого из супругов либо одного родителя в неполной семье не превышает 35 лет'
      }
    ]
  }),
  created () {
    this.$http.get('/api/borrowers')
      .then(res => {
        this.optionsBorrower = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    getAllBorrowerObject () {
      return this.optionsBorrower
    }
  },
  methods: {
    onCreateCredirObject () {
      this.$http.post('/api/social-payments', this.socialPaymentsObject)
        .then(res => {
          this.$router.push('/social-payment')
          this.$message({
            message: 'Социальная выплата добавлена',
            type: 'success'
          })
        })
        .catch(error => {
          this.$message({
            message: error.response.data.error.message,
            type: 'error'
          })
        })
    },
    onClickButtonBack () {
      this.$router.push('/social-payment')
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

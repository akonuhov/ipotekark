import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from '@/pages/auth/login'
import PageMain from '@/pages/index'
import PageCreditObjectList from '@/pages/credit-object/list'
import PageCreditObjectCreate from '@/pages/credit-object/create'
import PageCreditObjectUpdate from '@/pages/credit-object/update'
import PageBorrowerList from '@/pages/borrower/list'
import PageBorrowerCreate from '@/pages/borrower/create'
import PageBorrowerUpdate from '@/pages/borrower/update'
import PageSocialPaymentsList from '@/pages/social-payments/list'
import PageSocialPaymentsCreate from '@/pages/social-payments/create'
import PageSocialPaymentsUpdate from '@/pages/social-payments/update'
import PageDocumentList from '@/pages/document/list'
import PageDocumentCreate from '@/pages/document/create'
import PageDocumentUpdate from '@/pages/document/update'
import PageProviderList from '@/pages/provider/list'
import PageProviderCreate from '@/pages/provider/create'
import PageEvaluatorList from '@/pages/evaluator/list'
import PageEvaluatorCreate from '@/pages/evaluator/create'
import PageHistoryOperationList from '@/pages/history-operation/list'
import PageUserList from '@/pages/user/list'
import PageUserCreate from '@/pages/user/create'
import PageUserUpdate from '@/pages/user/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/',
      name: 'PageMain',
      component: PageMain,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/credit-object',
      name: 'PageCreditObjectList',
      component: PageCreditObjectList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/credit-object/update/:id',
      name: 'PageCreditObjectUpdate',
      component: PageCreditObjectUpdate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/credit-object/create',
      name: 'PageCreditObjectCreate',
      component: PageCreditObjectCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/borrower',
      name: 'PageBorrowerList',
      component: PageBorrowerList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/borrower/create',
      name: 'PageBorrowerCreate',
      component: PageBorrowerCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/borrower/update/:id',
      name: 'PageBorrowerUpdate',
      component: PageBorrowerUpdate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/social-payment',
      name: 'PageSocialPaymentsList',
      component: PageSocialPaymentsList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/social-payment/create',
      name: 'PageSocialPaymentsCreate',
      component: PageSocialPaymentsCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/social-payment/update/:id',
      name: 'PageSocialPaymentsUpdate',
      component: PageSocialPaymentsUpdate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/document',
      name: 'PageDocumentList',
      component: PageDocumentList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/document/create',
      name: 'PageDocumentCreate',
      component: PageDocumentCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/document/update/:id',
      name: 'PageDocumentUpdate',
      component: PageDocumentUpdate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/provider',
      name: 'PageProviderList',
      component: PageProviderList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/provider/create',
      name: 'PageProviderCreate',
      component: PageProviderCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/evaluator',
      name: 'PageEvaluatorList',
      component: PageEvaluatorList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/evaluator/create',
      name: 'PageEvaluatorCreate',
      component: PageEvaluatorCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/history-operation',
      name: 'PageHistoryOperationList',
      component: PageHistoryOperationList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/user',
      name: 'PageUserList',
      component: PageUserList,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/user/create',
      name: 'PageUserCreate',
      component: PageUserCreate,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/user/update/:id',
      name: 'PageUserUpdate',
      component: PageUserUpdate,
      meta: {
        authenticated: true
      }
    }
  ]
})

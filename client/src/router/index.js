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
import PageProviderList from '@/pages/provider/list'
import PageProviderCreate from '@/pages/provider/create'
import PageEvaluatorList from '@/pages/evaluator/list'
import PageEvaluatorCreate from '@/pages/evaluator/create'
import PageHistoryOperationList from '@/pages/history-operation/list'
import PageUserList from '@/pages/user/list'
import PageUserCreate from '@/pages/user/create'

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
        requiresAuth: true
      }
    },
    {
      path: '/credit-object',
      name: 'PageCreditObjectList',
      component: PageCreditObjectList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/credit-object/update/:id',
      name: 'PageCreditObjectUpdate',
      component: PageCreditObjectUpdate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/credit-object/create',
      name: 'PageCreditObjectCreate',
      component: PageCreditObjectCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/borrower',
      name: 'PageBorrowerList',
      component: PageBorrowerList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/borrower/create',
      name: 'PageBorrowerCreate',
      component: PageBorrowerCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/borrower/update/:id',
      name: 'PageBorrowerUpdate',
      component: PageBorrowerUpdate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/social-payment',
      name: 'PageSocialPaymentsList',
      component: PageSocialPaymentsList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/social-payment/create',
      name: 'PageSocialPaymentsCreate',
      component: PageSocialPaymentsCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/social-payment/update/:id',
      name: 'PageSocialPaymentsUpdate',
      component: PageSocialPaymentsUpdate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/document',
      name: 'PageDocumentList',
      component: PageDocumentList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/document/create',
      name: 'PageDocumentCreate',
      component: PageDocumentCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/provider',
      name: 'PageProviderList',
      component: PageProviderList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/provider/create',
      name: 'PageProviderCreate',
      component: PageProviderCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/evaluator',
      name: 'PageEvaluatorList',
      component: PageEvaluatorList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/evaluator/create',
      name: 'PageEvaluatorCreate',
      component: PageEvaluatorCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/history-operation',
      name: 'PageHistoryOperationList',
      component: PageHistoryOperationList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user',
      name: 'PageUserList',
      component: PageUserList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/create',
      name: 'PageUserCreate',
      component: PageUserCreate,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

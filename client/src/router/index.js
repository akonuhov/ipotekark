import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from '@/pages/auth/login'
import PageMain from '@/pages/index'
import PageCreditObjectList from '@/pages/credit-object/list'
import PageCreditObjectCreate from '@/pages/credit-object/create'
import PageBorrowerList from '@/pages/borrower/list'
import PageBorrowerCreate from '@/pages/borrower/create'
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
      component: PageMain
    },
    {
      path: '/credit-object',
      name: 'PageCreditObjectList',
      component: PageCreditObjectList
    },
    {
      path: '/credit-object/create',
      name: 'PageCreditObjectCreate',
      component: PageCreditObjectCreate
    },
    {
      path: '/borrower',
      name: 'PageBorrowerList',
      component: PageBorrowerList
    },
    {
      path: '/borrower/create',
      name: 'PageBorrowerCreate',
      component: PageBorrowerCreate
    },
    {
      path: '/document',
      name: 'PageDocumentList',
      component: PageDocumentList
    },
    {
      path: '/document/create',
      name: 'PageDocumentCreate',
      component: PageDocumentCreate
    },
    {
      path: '/provider',
      name: 'PageProviderList',
      component: PageProviderList
    },
    {
      path: '/provider/create',
      name: 'PageProviderCreate',
      component: PageProviderCreate
    },
    {
      path: '/evaluator',
      name: 'PageEvaluatorList',
      component: PageEvaluatorList
    },
    {
      path: '/evaluator/create',
      name: 'PageEvaluatorCreate',
      component: PageEvaluatorCreate
    },
    {
      path: '/history-operation',
      name: 'PageHistoryOperationList',
      component: PageHistoryOperationList
    },
    {
      path: '/user',
      name: 'PageUserList',
      component: PageUserList
    },
    {
      path: '/user/create',
      name: 'PageUserCreate',
      component: PageUserCreate
    }
  ]
})

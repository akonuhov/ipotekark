// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import App from './App'
import router from './router'
// import store from './store'
import VueConfig from 'vue-configuration'
import appConfig from './config.json'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/axios'

Vue.use(VueConfig, {
  config: appConfig
})
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})

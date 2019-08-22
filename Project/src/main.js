// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
const store = new Vuex.Store({
  state:{},
  mutations:{},
  getters:{},
  actions:{}
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

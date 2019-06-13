// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import mui from './lib/mui/js/mui.js'
import axios from 'axios'
import moment from 'moment'
import VuePreview from 'vue2-preview'
import store from './store'

Vue.use(MintUI)
Vue.use(VuePreview)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.$toast = MintUI.Toast
Vue.prototype.$ajax = axios
Vue.prototype.mui = mui
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})

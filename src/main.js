import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Datetime } from 'vue-datetime'
import Vuex from 'vuex'

Vue.use(Vuex)

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

import vuetify from './plugins/vuetify'

Vue.use(Datetime);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

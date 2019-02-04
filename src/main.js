// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuefire from 'vuefire'
Vue.use(Vuefire)
import VueResource from 'vue-resource'
Vue.use(VueResource)

import firebase from './service/firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at')
  }
})
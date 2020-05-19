import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store.js'

new Vue({
  el: '#app',
  store: store, // registering store to the root Vue instance.
  render: h => h(App)
})

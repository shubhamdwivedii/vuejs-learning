import Vue from 'vue'
import App from './App.vue';
import Servers from './components/Servers.vue'; 

Vue.component('app-servers', Servers); // Registering a component GLOBALLY


new Vue({
  el: '#app',
  render: h => h(App)
  // "render" is alternative to "template"
})

import Vue from 'vue'
import App from './App.vue'

// Can be used to emit and subscribe to event (Child-to-Child,Child-to-Parent communication)
export const EventBus = new Vue({
  // Any centralized code can be added here. 
  methods: {
    changeTitle(newTitle) {
      this.$emit('titleChanged', newTitle)
    }
  }
}); 
// Must be created before all components are loaded.

new Vue({
  el: '#app',
  render: h => h(App)
})

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-alt-result></app-alt-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <hr>
        <app-second-counter></app-second-counter>
        <hr>
        <app-third-counter></app-third-counter>
        <hr>
    
        <!-- v-bind:value, here the value is the input tag's attribute -->
        <input type="text" :value="value" @input="updateValue"><!-- using v-on:input we can dispatch actions when text is inputted here --> 
        <!-- v-model="value" will not work since value is a computed property (unless.... see below) -->
        <p>{{ value }}  (two-way binding with state)</p>
        <input type="text" v-model="advValue"><!-- we can achieve two way binding with v-model using get() and set(value) inside a computed property -->
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";
import AlternateResult from "./components/AlternateResult.vue";
import AnotherResult from './components/AnotherResult.vue';
import SecondCounter from './components/SecondCounter.vue'; 
import ThirdCounter from './components/ThirdCounter.vue';
import * as types from './store/modules/value/types'; // Always use name space when using multiple store modules

export default {
  computed: {
    value() {
      return this.$store.getters[types.GET_VALUE]; 
    },
    advValue: { // computed values can also have a getter (get()) and a setter (set())
      get: function() {
        return this.$store.getters[types.GET_VALUE]; 
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value)
      }
    } // Avoid using computed property this way, as it can get confusing.
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch(types.UPDATE_VALUE, event.target.value)
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAltResult: AlternateResult,
    appAnotherResult: AnotherResult, 
    appSecondCounter: SecondCounter, 
    appThirdCounter: ThirdCounter, 
  }
};
</script>

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
export default {
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

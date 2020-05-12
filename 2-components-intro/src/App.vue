<template> <!-- <template> can not contain multiple child elements directly -->
  <div> <!-- every component must have only ONE root elment -->
       <h1>Welcome To My App!</h1>
    <app-servers></app-servers>
    <!-- this component was regitered globally in main.js -->
    <hr />
    <app-header></app-header> 
    <alert-button></alert-button>  
    <app-footer></app-footer> <!-- perfer this way -->
    <appFooter></appFooter> <!-- this is supported in Vue but try to avoid this way -->
  </div>
</template>

<script>
import Header from './components/Header.vue'; 
import Footer from './components/Footer.vue'; 
import AlertButton from './components/AlertButton.vue'; 
export default { // this is the object that goes in Vue.component('element-tag', {})

  components: { // Multiple ways for defining tag name (key) for components 
    'app-header': Header, 
    appFooter: Footer, 
    AlertButton, // ES6 syntax 

    // Vue will automatically create tag name for these keys. 
  }

}
</script>


<!-- see styles in Footer to understand how scoped styles work -->
<style>
</style>

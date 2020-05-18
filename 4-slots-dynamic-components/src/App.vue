<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!-- content enclosed here will be rendered via slots -->
          <h2>{{ quote }}!</h2>
          <!-- this will not take below styles instead will take component (Quote's) style. -->
          <!-- quote will however will be taken from below data property -->
          <p>- Shubham Dwivedi</p>

          <h3 slot="my-slot">Named Slot Content</h3>
          <!-- slot is a keyword recognized by Vue -->
          <!-- to control where/how specific child elements are rendred in component (Quote), use named slots. -->
        </app-quote>
        <hr />
        <button @click="selectedComponent = 'appContact'">Contact</button>
        <button @click="selectedComponent = 'appCounter'">Counter</button>
        <!-- Notice the counter gets reset to 0, when changed back to it --> 
        <p>{{ selectedComponent }}</p>
        <!-- Note: everytime a componet is changed, a new instance is created, old one is destroyed. -->
        
        <!-- Dynamic Component -->
        <component :is="selectedComponent">
          <!-- v-bind:is property will take a component's name (string) and check if there is a component with that name in the "components" property, if found that component will be rendered -->
          <h3>Default Slot Content</h3> <!-- Dynamic components can also take props -->
        </component>
        <hr>
        <keep-alive> <!-- keep-alive keeps the component alive when unmounted. see counter and its lifecycle logs -->
          <component :is="selectedComponent">
            <h3>This Will Be Alive</h3>
          </component>
        </keep-alive> <!-- insted of getting "created" and "destroyed" on change, kept-alive dynamic componets will get "activated" and "deactivated". see logs -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Contact from "./components/Contact.vue";
import Counter from "./components/Counter.vue";
export default {
  data() {
    return {
      quote: "Bitches Be Crazy!!",
      selectedComponent: "appContact"
    };
  },
  components: {
    appQuote: Quote,
    appCounter: Counter,
    appContact: Contact
  }
};
</script>

<!-- this style will not be applied to content passed through slots -->
<style scoped>
h2 {
  color: red;
}
</style>

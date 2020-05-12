<<template>
  <div class="component">
    <h3>You may edit the User Details here</h3>
    <p>Edit Me!</p>
    <h4>User Age: {{ age }}</h4>
    <!-- age is a prop -->

    <h5>Title: {{ title }}</h5>
    <button @click="changeTitle">Change Title</button>

    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { EventBus } from "../main";
export default {
  data: function() {
    return {
      title: "Intern" // Used for child to child communication.
    };
  },
  props: ["age"], // Avoid using case-sensitive prop names like myAge or MyAge
  methods: {
    editAge() {
      // this.age = 30; // Don't do this, never directly modify prop's value in child.
      this.$emit("changeAge", 30);
    },
    changeTitle() {
      this.title = this.title === 'Intern' ? "Developer" : "Intern";
    
      EventBus.$emit("titleChanged", this.title); // comment out one of these
      // Or 
      EventBus.changeTitle(this.title) // if centralized code (see main.js)
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>

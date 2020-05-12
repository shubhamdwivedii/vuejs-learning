<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>My Name is: {{ name }}, Age: {{ age }}</p>
    <p>My Status is: {{ status }}</p>
    <button @click="changeName">Change My Name</button>
    <button @click="age = 26">Reset Age</button>
    <p>Title is not accessible here.</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
         <!-- <app-user-detail name="name"></app-user-detail> this will simply pass the string "name" instead of data property 'name' -->
          <app-user-detail :name="name" @nameReset="nameResetEvent" :status="status" :statusChange="changeStatus" :age="age"></app-user-detail> <!-- use v-bind to bind prop to a data property just like any other html attribute --> 
          <!-- @nameReset is a custom-event. for inline js > @nameReset="name = $event" $event is the data passed in the event by child component (UserDetail) -->
          <!-- any change to 'name' data property will lead to changes in the app-user-details component -->
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :age="age" @changeAge="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
export default {
  data: function() {
      return { // Always keep shared data in the most immediate common parent.
          name: 'Shubham',
          status: 'Available', 
          age: 26, 
      }
  },  
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
      changeName() {
          this.name = 'Dwivedi'; 
      },

      nameResetEvent(event) { // event argument is automatically passed by Vue
          this.name = event
      },
      changeStatus() { // this function will be passed as a callback prop to UserDetails
          this.status = this.status === 'Busy' ? 'Available' : 'Busy'; 
      }
      // User either custom-event ($emit()) or callback methods for child to parent communication
  }
};
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

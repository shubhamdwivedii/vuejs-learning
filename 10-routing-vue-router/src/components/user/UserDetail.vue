<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="'/user/' + $route.params.id + '/edit' + '?locale=en&count=100'">Edit User</router-link>
    <!-- v-bind:to can be used to dynamically add a link via javascript code (or data property) -->
    <router-link tag="button" class="btn btn-warning" :to="{ path: '/user/10/edit' + '?locale=fr&count=50'}">Edit User 10</router-link><!-- v-bind:to can also take an object -->
    <hr>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'userDelete', params: { id: $route.params.id }, query: { expired: true }}">Delete User</router-link>
    <!-- using named route example. Better approach, easier to pass params and query  -->

    <router-link tag="button" class="btn btn-danger" :to="hashedLink">Delete User (Go To Bottom using #id)</router-link>
    <!-- v-bind:to can also take data property object -->

  </div>
</template>

<script>
const authenticated = true; // false; 
export default {
    data() {
        return {
            isAuthenticated: true,
            hashedLink: {
                 name: 'userDelete', 
                 params: {
                     id: this.$route.params.id,
                 },
                 query: {
                     expired: false 
                 },
                 hash: "#data", // pass and #id here to jump (scroll) to that element automatically on page load.
                 // see scrollBehavior() in main.js  
            }
        }
    },
    // also checkout beforeRouteLeave() in UserEdit.vue
    beforeRouteEnter(to, from, next) { // lifecycle hook added by vue-router, // just like beforeEnter in the route setup (routes.js)
        // since this component hasent been created yet. you cannot access its properties using "this"
        // this.isAuthenticated // will not work

        if(authenticated) {
            next() 
        } else { next(false) } 
        
        /*
        next(); // as long as you don't call next() here, this component will NOT get loaded. 
        
        // you can pass callback to access this instance 
        next(vm => {
            vm.link; // at this point of time this component has been created. 
        })  */
    }

};
</script>

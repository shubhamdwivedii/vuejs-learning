<template>
  <div>
    <h1>The User Page</h1>
    <!--p>Loaded ID: {{ id }}</p -->
    <hr />
    <p>Navigating using JavaScript Code</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    <hr />
    <router-view></router-view>
    <!-- will load the nested routes for the /user component (listed in children field) see routes.js -->
  </div>
</template>

<
<script>
export default {
  methods: {
    navigateToHome() {
      // If router was registered, a $router property will be added in all nested components (Vue instances)
      this.$router.push("/");
      // can also pass object:
      // this.$router.push({ path: '/' })
      // or if route has a name
      // this.$router.push({ name: 'home' })
    }
  }
};
</script>

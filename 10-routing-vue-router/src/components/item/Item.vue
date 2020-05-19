<template>
  <div>
    <h1>The Item Page</h1>
    <p>Item ID: {{ id }}</p>
    <hr />
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        // accessing route parameters
        id: this.$route.params.id // $route property will automatically be added if a router is registered.
        // by default, this component will not react to changes in $route.params
        // We will need to add a watcher for that. see below.

      };
    },
    watch: {
        // we need watch for changes in $route, otherwise on changing the :id in path /user/10 -> /user/15, this component will not get re-rendered.
        '$route'(to, from) { // router will automatically pass these arguments to this watcher
          this.id = to.params.id;
          // "to" and "from" are just $route objects (new and old respectively)
        }
    },
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

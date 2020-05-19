<template>
  <div>
    <h3>Delete the User</h3>
    <p>Query Parameters</p>
    <p>Expired: {{ $route.query.expired }}</p>
    <!-- query parameters are automatically added in $route.query property -->
    <div style="height: 700px; background-color: lightgray;">
    </div>
    <span id="data"><h2>Some Extra Data Here...</h2></span>
    <!-- hashed scroll wiil be used to direcly jump to this. see scrollBehavior() in main.js and UserDetail -->
  </div>
</template>


<script>
export default {};
</script>

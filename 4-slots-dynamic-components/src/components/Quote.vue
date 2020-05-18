<template>
  <div>
    <slot></slot> <!-- non-named slot content will automatically rendered here in default slot -->
    <!-- slot is a reseved keyword, basically like children in react. -->
    <div class="named">
      <slot name="my-slot"></slot>
      <!-- named slots example -->
    </div>

    <span style="color: #ccc">
        <slot name="subtitle">This text is placeholder when no subtitle is passed</slot>
        <!-- slots can have default content when no content is passed from parent with slot's name -->
    </span>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  color: green;
}
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.named {
  color: blue;
  font-style: italic;
}
</style>

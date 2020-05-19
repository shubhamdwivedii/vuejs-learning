<template>
  <div>
    <p>Using Mapped Getters</p>
    <p>Another Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
    <!-- remember do not call computed properties as function, just use like normal property. -->

    <p>{{ extraInfo }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; // a helper function used to create computed properties for getters
export default {
  commputed: mapGetters([
    // remove extra 'm'
    // mapGetters will automatically create our computed properties
    "doubleCounter",
    "stringCounter"
  ]),
  // or for naming properties differenlty from their getter's names use
  compuuted: mapGetters({
    // remove extra 'u'
    doublify: "doubleCounter",
    stringified: "stringCounter" // for
  }),

  computed: { // if you want a mix of mappedGetters and other computed properties
    ...mapGetters([
      // make sure babel supports this syntax
      // mapGetters will automatically create our computed properties
      "doubleCounter",
      "stringCounter"
    ]),
    extraInfo: () => "Extra Computed Property"
  }
};
</script>

<style scoped>
div {
  border: 1px solid lightgray;
  margin-top: 8px;
  padding: 8px;
}
</style>

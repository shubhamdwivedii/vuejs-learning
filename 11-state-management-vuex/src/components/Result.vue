<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // props: ['counter']
        computed: {
            counter() {
                // $store is added automatically when a Vuex store was registered
                return this.$store.state.counter * 2; 
                // It is better to user a "getter", see AlternateResult.vue
            }
        }
    }
</script>
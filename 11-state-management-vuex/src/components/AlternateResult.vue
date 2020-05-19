<template>
    <div>
        <p>Alt Counter is: {{ counter }} (using getters)</p>
        <!-- remember do not call computed properties as function, just use like normal property. -->
    </div>

</template>

<script> 
    export default {
        // props: ['counter']
        computed: {
            counter() {
                // $store is added automatically when a Vuex store was registered
                // return this.$store.state.counter * 2; 

                // This code is repeated from Result.vue, Its better to user a "getter"
                return this.$store.getters.doubleCounter; // do NOT execute getter as a function ie: doubleCounter() 

            },
        }
    }
</script>
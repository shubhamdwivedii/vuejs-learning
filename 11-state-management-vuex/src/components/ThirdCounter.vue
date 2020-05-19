<template>
    <div>
        <p>Third Counter (Using Actions)</p>   
        <button class="btn btn-primary" @click="increment">Increment by 1</button>
        <button class="btn btn-primary" @click="decrement(2)">Decrement by 2</button>
        <hr>
        <button class="btn btn-warning" @click="asyncIncrement">Delayed Increment by 1</button>
        <button class="btn btn-warning" @click="asyncDecrement(3)">Delayed Decrement by 3</button>

        <!-- To pass more than one value in payload, pass an object -->
        <button class="btn btn-secondary" @click="asyncAddAfter({ add: 250, after: 3 })">Add 250 after 3 seconds</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'; 
    export default {
        // using mapActions helper to automatically create all methods for actions
        methods: { 
            ...mapActions([
                'increment', 
                'asyncIncrement', 
                'decrement', // mapActions will automatically pass arguments too. 
                'asyncAddAfter', 
            ]),
            asyncDecrement(by) {
                // actions are dispatched this way. prefer mapActions whenever you can.
                this.$store.dispatch('asyncDecrement', by)
            }
        }
    }
</script>
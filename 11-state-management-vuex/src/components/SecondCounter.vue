<template>
    <div>
        <p>Second Counter (Using Mutations)</p>   
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'; 
    export default {
        methods: {
            increment() {
                // Using Mutations 
                this.$store.commit('increment') // this only takes the name of the mutation AS a STRING
            },
            decrement() {
                this.$store.commit('decrement')
            }
        },

        // using mapMutations helper to automatically create all methods for mutations
        methodss: { // remove the extra 's'
            ...mapMutations([
                'increment', 
                'decrement', 
            ])
        }
    }
</script>
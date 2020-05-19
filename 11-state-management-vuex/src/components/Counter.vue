<template>
    <div>
        <p>First Counter</p>   
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                // this.$emit('updated', 1);

                // $store gives us access to the central store
                this.$store.state.counter++; 
                // this is not ideal, user MUTATIONS instead

            },
            decrement() {
                // this.$emit('updated', -1);

                this.$store.state.counter--;
                // avoid doing this, use mutations. 
            }
        }
    }
</script>
<template>
    <div class="container">
        <slot></slot>  
        <h2>Counter</h2>  
        <button @click="counter++">Increment!</button>
        <p>Count {{ counter }}</p> 
    </div>
</template>

<<script>
export default {
    data() {
        return {
            counter: 0, 
        }
    },
    created() {
        console.log("Counter was created :)")
    },
    destroyed() {
        console.log("Counter was destroyed :(")
    },
    activated() { // useful lifecycle hook for kept-alive dynamic components
        console.log("Counter was activated!!")
    },
    deactivated() { // useful lifecycle hook for kept-alive dynamic components
        console.log("Counter was deactivated!!")
    },
}
</script>

<style scoped>
</style>
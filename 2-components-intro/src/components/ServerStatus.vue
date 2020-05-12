<template>
    <div>
        <p>Server Status: {{ status }}</p>
        <button @click="changeStatus">Change Status</button>
        <hr />
    </div>

</template>

<script>
    export default {  // this is the object that goes in Vue.component('element-tag', {})
        data: function() { // remember data is function in components
            return {
                status: 'Critical', 
            }
        },
        methods: {
            changeStatus() { // ES6 syntax
                this.status = 'Normal'
            }
        }
    }
</script>

<!-- Since this style is "scoped", it will only affect this component only
     ie: this style will be applied locally only -->
<style scoped>
    div {
        border: 1px solid red; 
    }
</style>
<template>
    <button @click="showAlert">Alert Button</button>
</template>

<script>
    export default {
        methods: {
            showAlert() {
                alert("Hello World!")
            }
        }
    }
</script>

<style>
</style>
<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
        <!-- this component was registered locally below -->
    </div>

</template>

<script>
    import ServerStatus from './ServerStatus.vue';
    export default {  
        components: { // Registering components locally
            'app-server-status': ServerStatus,
        }
    }
</script>

<!-- Since this style is "scoped", it will only affect this component only
     ie: this style will be applied locally only -->
<style scoped>
    div {
        border: 4px dashed blue; 
    }
</style>
<template>
    <div>
        <h3>Edit the User</h3>
        <p>Query Parameters</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Count: {{ $route.query.count }}</p>
        <!-- query parameters are automatically added in $route.query property -->

        <hr>
        <button class="btn btn-danger" @click="confirmed = true">{{ confirmed ? "Already Confirmed Delete" : "Confirm Delete" }}</button>
        <p>pss... try clicking "Go To Home" first without confirming</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false 
        }
    },

    beforeRouteLeave(to, from, next) {
        // unlike beforeRouteEnter, here you do have access to "this" component's instance as it has been created. 
        if (this.confirmed) {
            next(); 
        } else {
            if (confirm('Are you sure ?')) { // confirm will open a alert with button for confirm, this is a browser feature. 
                next(); 
            } else {
                next(false)
            }
        }
    }
}
</script>
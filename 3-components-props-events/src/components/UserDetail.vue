<<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <!-- props can be used just like any data property -->
    <button @click="resetName">Reset Name</button>
    <hr />
    <p>Status: {{ status }}</p>
    <p>Age: {{ age }}</p>
    <button @click="statusChange()">Status Change</button>
    <!-- Note: statusChange() is called here (inline js) instead of passing function reference (to DOM click event) -->
    <!-- statusChange is a callback function recieved via props -->

    <h5>Title: {{ title }}</h5>
  </div>


</template>

<script>
import { EventBus } from '../main';
export default {
    data: function() {
        return {
            title: 'Intern', // Used for child to child communication.
        }
    },
    // For props with validation use this way:
    props: {
        // key is the prop name,
        status: String, // String is the type of property

        // for multiple type use this
        nickname: [String, Array],

        // for more validation
        name: {
            type: String,
            required: true,
            default: 'ShubhDefault'
        },

        // for Object or Array types default should be function
        account: {
            type: Object,
            default: function() {
                return { id: 42, balance: 2000, name: 'Shubh' }
            }
        },

        statusChange: Function, // this will be a callback function sent by parent to trigger status change. 
        age: Number, 
        
    },
    // For simple props (array) without validation see UserEdit's props. 

    methods: {
        switchName() {
            // props can be access via 'this' just like any other data property
            return this.name.split('').reverse().join('')
        },

        resetName() {
            this.name = 'Shubham Resetted' // Don't do this (ie: directly change value of a prop in child component). // prop value will automatically change after below event is resolved.
            // remember 'name' is a prop not data property. will this work ?? NO 
            // Why ?? --> name is part of parent's (User's) data property, since name is primitive type its value was passed rather than it's reference. 
            // This method will change the name for this component only and the parent won't know of it, clicking "Change My Name" will have no effect afterwards. 
            
            // To let the parent know use the Vue instance's built in $emit method. $emit('eventName', someData)
            this.$emit('nameReset', 'Shubham Resetted')

            // There should be a event listener in the parent (See <app-user-detail> in User.vue)
        }
    },

    created() {
        // Registering a Listener using Vue instance's $on() method
        EventBus.$on('titleChanged', (updatedTitle) => { // Whenever the 'titleChanged' event is triggered this callback function will get executed.
            this.title = updatedTitle; 
        }); 
    }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

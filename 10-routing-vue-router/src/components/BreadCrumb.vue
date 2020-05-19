 <template>
     <div class="nav">
        <!-- router-link will ultimately render an anchor tag (by default), which will be handled in the SPA (if mode: 'hash') -->
         <!-- <li role="presentation" class="active"><router-link to="/">Home</router-link></li> -->
         <!-- <li role="presentation"><router-link to="/user">User</router-link></li> -->

        <!-- to change which tag this link will be rendered as use the tag attribute -->
        <router-link to="/" tag="span" active-class="active" exact><a>Home</a></router-link> <!-- exact is also a router-link attribute that makes sure the route is matched exactly to mark it as active -->
        <!-- the active-class is a router-link attribute which will add the given class when the route is active automatically -->
        >
        <router-link to="/user" tag="span" active-class="active"><a>User</a></router-link> <!-- if exact is not added in Home link, when User link is activated, Home link will stay marked as active as /user path also includes / (home) path -->
        <!-- not using exact is usefull when desiging breadcrumb like links -->

        <!--router-link to="/user/20" tag="li" active-class="active"><a>User 2</a></router-link> <to demponstrate reacting to route param changes, see User.vue -->

     </div>
 </template>
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes'; 

Vue.use(VueRouter);

// Register your routes this way. 
const router = new VueRouter({
  routes: routes, 
  // mode: 'history', // default mode: 'hash',  
  // VueRouter will automatically add a '#' route by default. eg localhost:8080/#/login or example.com/#/login 
  // This is done because we want to handle route changes in our Single Page Application. 
  // Route changes to root (example.com/home > example.com/login) will be sent to the server. 
  // To disable this feature. set "mode" to "history" in router config. 
  
  
  scrollBehavior(to, from, savedPosition) { // this method can be used to change scroll behavior
    if (savedPosition) { // can be used to restore savedPosition, eg. if user presses the "back" button
      return savedPosition
    }

    if (to.hash) { // to is a $route, if to has a hash property we can scroll down to it
      return { selector: to.hash } // selector is a DOM selector-string (div, .class, #id etc), here to.hash = #data
    }
    // return { x: 0, y: 700}; // this will scroll 700px down on every page (if the page is that long) uncomment and see UserDelete page.
    return { x: 0, y: 0 }
  }
})

// we can edit behavior beforeEach route change, this will get executed on every route change
router.beforeEach((to, from, next) => { // be careful what you put here, avoid very complex logic , use very generic checks only
  console.log("global beforeChange"); // for local beforeEnter() see routes.js UserDetail route

  next(); //will allow routing action to continue, ie: will allow to route to "to" page.
  // next(false); // will abort routing action, and will stay on the current "from" page. 
  
  // to redirect use: 
  // next({ path: '/user'}) 
  // next({ name: 'home'})
})






new Vue({
  el: '#app',
  router: router, // your routes are now registered.
  render: h => h(App)
})

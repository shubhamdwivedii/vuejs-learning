import Home from './components/Home.vue'; 
// import Item from './components/item/Item.vue'
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue'; 
// import UserDetail from './components/user/UserDetail.vue'; 
// import UserEdit from './components/user/UserEdit.vue';
// import UserDelete from './components/user/UserDelete.vue'; 
import BreadCrumb from './components/BreadCrumb.vue'; 
// By default all these imports will be downloaded in same bundle.  


// LAZY LOADING
// To divide components in separate smaller bundles use lazy load. 

const Item = resolve => { // webpack will only download the Item bundle when its needed ie: when Item page is navigated to. (inspect and see network)
    require.ensure(['./components/item/Item.vue'], () => {
        resolve(require('./components/item/Item.vue'))
    })
}

// We can also put all similar imports in groups, to they will be loaded in a group bundle
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user') // add group name here in third argument for resolve.ensure()
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user') 
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user') 
}

// Below two will be loaded in separate bundles, see in network calls.
const UserEdit= resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }) // I've intentionally omitted groupname here to demonstrate how this will be loaded in a separate bundle
}

const UserDelete = resolve => {
    require.ensure(['./components/user/UserDelete.vue'], () => {
        resolve(require('./components/user/UserDelete.vue'))
    }) // I've intentionally omitted groupname here to demonstrate how this will be loaded in a separate bundle
}



export const routes = [
    { 
        path: '',
        // component: Home, not needed when have separate components:{ defautl: } 
        components: {
            default: Home, 
            'bread-top': BreadCrumb, // this will render BreadCrumb at <router-view name="bread-top"></router-view>
        },
        name: "home", 
    }, // order of this array describes which component will be loaded first 
    {
        path: '/item/:id', // will trigger when visit example.com/#/item/10 or localhost:8080/#/item/12
        component: Item,
    },

    {
        path: '/user', // will trigger when visit example.com/#/user or localhost:8080/#/user
        // component: User,
        components: {
            default: User, 
            'bread-bottom': BreadCrumb, // this way we can hide/show certain elements (like navbar, header, footer) from certain pages.
        },
        children: [ // children is an array of routes that will be nested inside /user 
            { path: '', component: UserStart }, // will get rendered at 'example.com/#/user/
            {
                // :id is route parameter
                path: ':id', // will trigger when visit example.com/#/user/10
                component: UserDetail,
                beforeEnter: (to, from, next) => { // also see beforeRouteEnter() in UserDetail.vue
                    console.log('inside /user/:id route beforeEnter')
                    next(); 
                }
            },  
            { path: ':id/edit', component: UserEdit }, // will trigger when visit example.com/#/user/10/edit
            { path: ':id/delete', component: UserDelete, name: 'userDelete'} // named routes can also be used, see UserDetail
        ]
    }, 
    {
        path: '/redirect-me', redirect: '/user', // this will redirect to /user when hit url example.com/#/redirect-me
    },
    {
        // this will catch all non-defined routes 
        path: '*', redirect: { name: 'home' },
        // redirect can also take objects { path: '/' } 
    }
];
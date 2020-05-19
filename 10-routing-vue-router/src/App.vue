<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <app-header></app-header>
                <hr>
                <!-- named router-views, used to render a component, see router.js -->
                <router-view name="bread-top"></router-view>
                <transition name="slide" mode="out-in"><!-- we can add route transistion animations by wrapping like this -->
                  <router-view></router-view> <!-- default non-named router-view -->
                  <!-- built in component in vue which tells to load router components here -->
                  
                </transition>
              
                <router-view name="bread-bottom"></router-view>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'; 
    export default {
      components: {
        appHeader: Header, 
      }
    }
</script>

<!-- use some library like Animate.css instead of doing these things in real app -->
<style> 
  .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>

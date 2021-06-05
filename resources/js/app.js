require('./bootstrap');

import Vue from 'vue';  
import VueRouter from 'vue-router';


Vue.use(VueRouter);


import Home from './components/Home.vue';
import Test from './components/Test.vue';




 const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/test',
        component: Test,
        name: 'Test'
    },
    
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router: router
});

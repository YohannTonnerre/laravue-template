
import VueRouter from 'vue-router';
import Vue from 'vue'; 
import Home from "../components/Home.vue";
import Register from "../components/Auth/Register.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

 const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/register',
        component: Register,
        name: 'Register'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard'
    },
    
]


const router = new VueRouter({
    routes
})
  
  export default router;

import VueRouter from 'vue-router';
import Vue from 'vue'; 
import Home from "../components/Home.vue";
import Register from "../components/Auth/Register.vue";
import Login from "../components/Auth/Login.vue";
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
        path: '/login',
        component: Login,
        name: 'Login'
    },
    {
        path:'/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        beforeEnter: (to, from, next) => {
            axios.get('/api/authentificated').then(()=>{
                next()
            }).catch(()=>{
                return next({name: 'Login'})
            })
        }
    },
    
]


const router = new VueRouter({
    routes
})
  
  export default router;
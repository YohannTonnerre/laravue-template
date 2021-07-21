
import VueRouter from 'vue-router';
import Vue from 'vue'; 
import Home from "../components/Home.vue";
import Test from "../components/Test.vue";

Vue.use(VueRouter);

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
  
  export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Pages
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

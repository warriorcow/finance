import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Pages
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
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

router.beforeEach((to, from, next) => {
    console.log(!window.Laravel.isLoggedin)
    if (to.path !== '/login' && !window.Laravel.isLoggedin) {
        next('login')
    } else {
        next()
    }
})

export default router

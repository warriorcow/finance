/**
    * First we will load all of this project's JavaScript dependencies which
    * includes Vue and other libraries. It is a great starting point when
    * building robust, powerful web applications using Vue and Laravel.
*/
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons, ToastPlugin } from 'bootstrap-vue'
import App from './views/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from './router'
import store from "./store"

/**
    * Next, we will create a fresh Vue application instance and attach it to
    * the page. Then, you may begin adding components to this application
    * or customize the JavaScript scaffolding to fit your unique needs.
*/
window.Vue = require('vue');
require('./bootstrap');
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(ToastPlugin)


const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

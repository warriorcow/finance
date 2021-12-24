/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 import Vue from 'vue'
 require('./bootstrap');
 window.Vue = require('vue');

 import App from './views/App.vue';
 import VueAxios from 'vue-axios';
 import axios from 'axios';
 import Vuetify from 'vuetify'
 import 'vuetify/dist/vuetify.min.css'
 Vue.use(Vuetify)

 export default new Vuetify({
     theme: {
         themes: {
             light: {
                 primary: '#3f51b5',
                 secondary: '#696969',
                 accent: '#8c9eff',
                 error: '#b71c1c',
             },
         },
     },
 })

 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */

//  Vue.use(VueRouter);
 Vue.use(VueAxios, axios);

//  const router = new VueRouter({
//      mode: 'history',
//      routes: routes
//  });

 const app = new Vue({
     el: '#app',
     render: h => h(App),
 });

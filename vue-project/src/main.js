import { createApp } from 'vue'

//import Vue from 'vue'
import  {BootstrapVue3}  from 'bootstrap-vue-3'
import Main from './Main.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About.vue";
import App from "./views/App.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin

createApp(Main)
    .use(BootstrapVue3)
    .use(router)
    .mount('#app');




import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue";
import About from "./views/About.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

export default new createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
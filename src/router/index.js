import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase-config";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";

const withAuth = (_to, _from, next) => {
  !auth.currentUser ? next({ name: "Login" }) : next();
};

const routes = [
  {
    path: "/",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    beforeEnter: withAuth
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase-config";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import Admin from "../views/Admin.vue";

const withAuth = (_to, _from, next) => {
  !auth.currentUser ? next({ name: "Login" }) : next();
};

const withAdmin = (_to, _from, next) => {
  // redirect to login if no logged user
  if (!auth.currentUser) return next({ name: "Login" });

  return auth.currentUser.email === "srompavel98@gmail.com"
    ? next()
    : next({ name: "Login" });
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
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: withAdmin
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

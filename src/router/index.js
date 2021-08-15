import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";
import Api from "../views/Api.vue";
import Manual from "../views/Manual.vue";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },

  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
  {
    path: "/manual",
    name: "Manual",
    component: Manual,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

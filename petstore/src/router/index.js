import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

const Form = () => import("../views/Form.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    props: true,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

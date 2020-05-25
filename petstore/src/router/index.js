import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

const Form = () => import("../views/Form.vue");
const Product = () => import("../views/Product.vue");
const EditProduct = () => import("../views/EditProduct.vue");

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
  {
    path: "/product/:id",
    name: "Id",
    component: Product,
    props: true,
    children: [
      {
        path: "edit",
        name: "Edit",
        component: EditProduct,
        props: true,
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

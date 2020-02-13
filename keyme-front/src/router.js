import Vue from "vue";
import Router from "vue-router";
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";
import Order from "./components/Order.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "products",
      component: Products
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/order",
      name: "order",
      component: Order
    }
  ]
});

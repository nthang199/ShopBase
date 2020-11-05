import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home";
// import About from "@/views/About";
// import Contact from "@/views/Contact";



import Dashboard from "../views/products/Dashboard.vue"
import Add from "../views/products/Add.vue"
import Details from "../views/products/Details.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Products",
      component: Dashboard
    },
    {
      path: "/allproducts/",
      name: "Dashboard",
      component: Dashboard 
    },
    {
      path: "/product/:id",
      name: "Details",
      component: Details 
    } ,
    {
      path: "/addproducts",
      name: "Add product",
      component: Add
    },
    {
      path: "/collectios",
      name: "Dashboard",
      component: Dashboard
    }
    ,
    {
      path: "/inventory",
      name: "Dashboard",
      component: Dashboard
    }
    ,
    {
      path: "/product-feeds",
      name: "Dashboard",
      component: Dashboard
    }   ,
    {
      path: "/bulk-updates",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: '/allproducts/tab-all',
      name: 'ProductDashboardTab-All',
      component: Dashboard
    },
    {
      path: '/allproducts/tab-published',
      name: 'ProductDashboardTab-Published',
      component: Dashboard
    },
    {
      path: '/allproducts/tab-unpublished',
      name: 'ProductDashboardTab-Unpublished',
      component: Dashboard
    }
  ]
});

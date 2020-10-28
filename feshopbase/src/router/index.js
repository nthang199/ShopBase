import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home";
// import About from "@/views/About";
// import Contact from "@/views/Contact";



import ListProducts from "../views/products/ListProducts.vue"
import AddProduct from "../views/products/AddProduct.vue"
import ViewProduct from "../views/products/ViewProduct.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Products",
      component: ListProducts
    },
    {
      path: "/allproducts",
      name: "List Products",
      component: ListProducts 
    },
    {
      path: "/allproducts/:id",
      name: "ViewProduct",
      component: ViewProduct 
    } ,
    {
      path: "/addproducts",
      name: "Add Product",
      component: AddProduct
    },
    {
      path: "/collectios",
      name: "ListProducts",
      component: ListProducts
    }
    ,
    {
      path: "/inventory",
      name: "Products",
      component: ListProducts
    }
    ,
    {
      path: "/product-feeds",
      name: "Products",
      component: ListProducts
    }   ,
    {
      path: "/bulk-updates",
      name: "Products",
      component: ListProducts
    }
  ]
});

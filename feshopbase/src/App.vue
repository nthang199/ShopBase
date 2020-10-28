<template>
  <div id="app">
    <div class="menu fixed-top" v-if="isActive">
      <MenuSideBar
        v-bind:menu="menu"
        v-bind:shopInfo="shopInfo"
        v-on:titlemenu="titlemenu"
        v-bind:listProducts="listProducts"
      ></MenuSideBar>
    </div>

    <router-view
      @saveProduct="saveProduct"
      v-bind:listProducts="listProducts"
    ></router-view>
  </div>
</template>

<script>
import MenuSideBar from "./components/menusidebar/MenuSideBar.vue";
// import ListProducts from "./views/products/ListProducts";
export default {
  name: "App",
  data() {
    return {
      isActive: false,
      shopInfo: {
        name: "ShopBase",
        logo:
          "https://admin-cdn.shopbase.com/ea1df11279/img/Compact.ac400184.svg",
      },
      menu: [
        { icon: "", title: "Home", path: "/allproducts", submenu: [] },
        {
          icon: "",
          title: "Orders",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "All orders", path: "/allproducts" },
            { icon: "", title: "Abandoned checkouts", path: "/allproducts" },
          ],
        },
        {
          icon: "",
          title: "Products",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "All prodcuts", path: "/allproducts" },
            { icon: "", title: " Inventory", path: "/inventory" },
            { icon: "", title: "Collections", path: "/collectios" },
            { icon: "", title: "Product feeds", path: "/product-feeds" },
            { icon: "", title: "Bulk updates", path: "/bulk-updates" },
          ],
        },
        { icon: "", title: "Analytics", path: "/allproducts", submenu: [] },
        {
          icon: "",
          title: "Discounts",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "Codes", path: "/allproducts" },
            { icon: "", title: "Automatic", path: "/allproducts" },
          ],
        },

        {
          icon: "",
          title: "Apps",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "All orders", path: "/allproducts" },
            { icon: "", title: "Abandoned checkouts", path: "/allproducts" },
          ],
        },
        { icon: "", title: "Settings", path: "/allproducts", submenu: [] },
        {
          icon: "",
          title: "Online Store",
          path: "/allproducts",
          submenu: [{ icon: "", title: "Themes", path: "/allproducts" }],
        },
      ],
      listProducts: [
        {
          title: "test",
          type: "test",
          vendor: "test",
          listPicture: [
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    titlemenu(index) {
      return this.menu[index].title;
    },
    saveProduct(product) {
      // console.log("done", product);
      this.listProducts.push(product);
    },
  },
  created() {
    console.log(this.$route.fullPath);
  },
  components: {
    MenuSideBar,
    // ListProducts,
  },
  watch: {
    $route: function() {
      console.log(this.$route.fullPath);
      console.log(this.$route.fullPath.lastIndexOf("/product/"));
      if (this.$route.fullPath.lastIndexOf("/product/") == -1) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: left;
}
#app .menu {
  display: block;
  width: 18% !important;
  height: 100%;

  border-right: 1px solid #8b8888;
}
#app .content {
  display: block;
  width: 82%;
  height: 100%;
  float: right;
  /* border-right: 1px solid #8b8888; */
  overflow: scroll;
}
.container,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  height: 100%;
  padding-right: 40px !important;
  padding-left: 40px !important;
  margin: 3% 25%;
}
.row {
  display: flex;
  align-content: center;
  justify-items: center;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
</style>

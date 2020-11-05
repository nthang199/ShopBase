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
import MenuSideBar from "./components/common/MenuSideBar";
// import ListProducts from "./views/products/ListProducts";
export default {
  name: "App",
  data() {
    return {
      isActive: null,
      shopInfo: {
        name: "ShopBase",
        logo:
          "https://admin-cdn.shopbase.com/ea1df11279/img/Compact.ac400184.svg",
      },
      menu: [
        {
          icon: '<i class="mdi mdi-home mdi-24px"></i>',
          title: "Home",
          path: "/allproducts",
          submenu: [],
        },
        {
          icon: '<i class="mdi mdi-clipboard-text mdi-24px"></i>',
          title: "Orders",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "All orders", path: "/allproducts" },
            { icon: "", title: "Abandoned checkouts", path: "/allproducts" },
          ],
        },
        {
          icon: '<i class="mdi mdi-tag-multiple mdi-24px"></i>',
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
        {
          icon: '<i class="mdi mdi-signal-cellular-3 mdi-24px"></i>',
          title: "Analytics",
          path: "/allproducts/tab-all",
          submenu: [],
        },

        {
          icon: '<i class="mdi mdi-folder-account mdi-24px"></i>',
          title: "Customers",
          path: "/allproducts",
          submenu: [],
        },
        {
          icon: '<i class="mdi mdi-ticket-percent mdi-24px"></i>',
          title: "Discounts",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "Codes", path: "/allproducts" },
            { icon: "", title: "Automatic", path: "/allproducts" },
          ],
        },

        {
          icon: '<i class="mdi mdi-puzzle mdi-24px"></i>',
          title: "Apps",
          path: "/allproducts",
          submenu: [
            { icon: "", title: "All orders", path: "/allproducts" },
            { icon: "", title: "Abandoned checkouts", path: "/allproducts" },
          ],
        },
        {
          icon: '<i class= "mdi mdi-store mdi-24px"></i>',
          title: "Settings",
          path: "/allproducts",
          submenu: [],
        },
        {
          icon: '<i class= "mdi mdi-store mdi-24px"></i>',
          title: "Online Store",
          path: "/allproducts",
          submenu: [{ icon: "", title: "Themes", path: "/allproducts" }],
        },
      ],
      listProducts: [
        {
          slug: "",
          title: "Product1",
          description: "Product1",
          type: "Product1",
          options: [
            { name: "Size", value: ["s", "m", "l"] },
            { name: "Color", value: ["red", "green", "blue"] },
          ],
          variant: [],
          image: [
            "https://img.crocdn.co.uk/images/products2/pl/20/00/02/16/pl2000021685.jpg",
            "https://img.crocdn.co.uk/images/products2/pl/20/00/02/16/pl2000021685.jpg",
            "https://img.crocdn.co.uk/images/products2/pl/20/00/02/16/pl2000021685.jpg",
          ],
          listPicture: [
            "https://img.crocdn.co.uk/images/products2/pl/20/00/02/16/pl2000021685.jpg",
            "https://img.crocdn.co.uk/images/products2/pl/20/00/02/16/pl2000021685.jpg",
            "https://img.crocdn.co.uk/images/products2/pl/20/00/02/16/pl2000021685.jpg",
          ],
          priceSale: 0,
          price: 0,
          pricePerItem: 0,
          collection: [],
          vendor: "",
          tags: ["T-shit", "Cotton", "Vintage"],
        },
      ],
    };
  },
  methods: {
    titlemenu(index) {
      return this.menu[index].title;
    },
    saveProduct(product) {
      this.listProducts.push(product);
    },
  },
  created() {
    if (this.$route.fullPath.lastIndexOf("/product/") == -1) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  },
  components: {
    MenuSideBar,
  },
  watch: {
    $route: function() {
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
  width: 19% !important;
  height: 100%;
  border-right: 1px solid #8b8888;
}
#app .content {
  display: block;
  width: 81%;
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
  /* padding-right: 55px !important;
  padding-left: 55px !important; */
  padding: 0 5% !important;
  margin: 5% 26%;
}
.row {
  display: flex;
  align-content: center;
  justify-items: center;
}
</style>

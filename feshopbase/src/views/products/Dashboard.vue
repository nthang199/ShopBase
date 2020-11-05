<template>
  <div class="content ">
    <div class="container">
      <div id="list-products">
        <ProductDashboardHeader :tab="tab"></ProductDashboardHeader>

        <ProductDashboardItemProduct
          :listProducts="listProducts"
        ></ProductDashboardItemProduct>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDashboardHeader from "../../components/products/ProductDashboardHeader";
import ProductDashboardItemProduct from "../../components/products/ProductDashboardItemProduct";
export default {
  name: "Dashboard",
  props: { listProducts: Array },
  data() {
    return {
      tab: "all",
    };
  },
  components: {
    ProductDashboardHeader,
    ProductDashboardItemProduct,
  },
  methods: {},
  watch: {
    $route: function() {
      console.log(
        this.$route.fullPath.slice(
          this.$route.fullPath.lastIndexOf("-") + 1,
          this.$route.fullPath.length
        )
      );
      this.tab = this.$route.fullPath.slice(
        this.$route.fullPath.lastIndexOf("-") + 1,
        this.$route.fullPath.length
      );
    },
  },
};
</script>

<style></style>

<template>
  <div id="list-products">
    <Header></Header>

    <ItemProduct :listProducts="listProducts"></ItemProduct>
  </div>
</template>

<script>
import Header from "../components/Header";
import ItemProduct from "./components/ItemProduct";
export default {
  name: "listProducts",
  props: { listProducts: Array },
  data() {
    return {
      // listProducts: [
      // {
      // id: 1,
      // slug: "pro-1",
      // title: "1",
      // description: "1",
      // type: "",
      // options: [],
      // variant: [],
      // image: [],
      // listPicture: [],
      // priceSale: 0,
      // price: 0,
      // pricePerItem: 0,
      // collection: [],
      // vendor: "",
      // },
      // ],
      // listProducts: [],
    };
  },
  components: {
    Header,
    ItemProduct,
  },
  methods: {
    // saveProduct(product) {
    //   //
    //   console.log("done", product);
    // },
  },
  created() {
    // this.listProducts = this.$attrs.listProducts;
    // console.log(this.$attrs.listProducts);
  },
};
</script>

<style></style>

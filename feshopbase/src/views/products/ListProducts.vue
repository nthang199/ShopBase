<template>
  <div id="list-products">
    <Header v-bind:parentmenu="parentmenu"></Header>
    <div v-for="(itemProduct, index) in listProducts" :key="index">
      <ItemProduct :product="itemProduct"></ItemProduct>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ItemProduct from "./components/ItemProduct";
export default {
  name: "listProducts",
  props: {
    parentmenu: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      listProducts: [
        {
          id: 1,
          slug: "pro-1",
          title: "1",
          description: "1",
          type: "",
          options: [],
          variant: [],
          image: [],
          listPicture: [],
          priceSale: 0,
          price: 0,
          pricePerItem: 0,
          collection: [],
          vendor: "",
        },
      ],
    };
  },
  components: {
    Header,
    ItemProduct,
  },
};
</script>

<style></style>

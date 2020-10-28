<template>
  <div>
    <div class="row table-header">
      <div class="col-1">
        <label for="s-checkbos">
          <input
            type="checkbox"
            name=""
            id="action"
            value="true"
            @click="checkedbox"
          />
        </label>
      </div>
      <div class="col-7">
        <p>Products</p>
      </div>
      <div class="col-2">
        <p>Type</p>
      </div>
      <div class="col-2">
        <p>Vendor</p>
      </div>
    </div>
    <div
      class="row table-item"
      v-for="(item, index) in listProducts"
      :key="index"
    >
      <div class="col-1">
        <label for="s-checkbos">
          <input type="checkbox" name="" id="" v-bind:checked="check" />
        </label>
      </div>

      <div class="col-7 product-style">
        <p class="p-view" v-if="index == indexProduct">View on Online Store</p>
        <!-- <a
          :href="'/allproduct-' + item.title"
          class="view"
          @mouseenter="mouseActive(index)"
          @mouseleave="mouseNoActive()"
          ><i class="fas fa-eye"></i
          :to="`/allproducts/${item.title}`"
          class="view"
          @mouseenter="mouseActive(index)"
          @mouseleave="mouseNoActive()"
        ></a> -->
        <router-link
          :to="`/allproducts/${item.title}`"
          class="view"
          @mouseenter="mouseActive(index)"
          @mouseleave="mouseNoActive()"
          ><i class="fas fa-eye"></i
        ></router-link>
        <div class="image">
          <img :src="item.listPicture[0]" alt="" />
        </div>
        <div class="product-name">
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="col-2">
        <p>{{ item.type }}</p>
      </div>
      <div class="col-2">
        <p>{{ item.vendor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemproducs",
  props: { listProducts: Array },
  data() {
    return {
      check: false,
      indexProduct: -1,
    };
  },
  methods: {
    checkedbox() {
      this.check = !this.check;
      //   console.log(this.check);
      //   return this.check;
    },
    mouseActive(index) {
      this.indexProduct = index;
    },
    mouseNoActive() {
      this.indexProduct = -1;
    },
  },
};
</script>

<style>
img {
  width: 70px;
  height: 70px;
  border: 1px solid #c51b1b;
}
.product-style {
  position: relative;
}
.p-view {
  position: absolute;
  top: -10px;
  z-index: 1000;
  background-color: rgb(73, 77, 77);
  border-radius: 5px;
  padding: 2px 3px;
  color: rgb(237, 241, 241);
}
.view {
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="table-header">
    <div class="row table-header-item">
      <div class="col-2">
        <label class="checkbox-label">
          <input
            class="check"
            type="checkbox"
            name=""
            id="action"
            value="true"
            @click="checkedbox"
          />
        </label>
        <span class="checkbox-custom"></span>
      </div>
      <div class="col-6">
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
      <div class="col-2">
        <label for="s-checkbos" class="checkbox-label">
          <input
            type="checkbox"
            class="check"
            name=""
            id=""
            v-bind:checked="check"
          />
          <span class="checkbox-custom"></span>
        </label>
      </div>

      <div class="col-6 product-style">
        <p class="p-view" v-if="index == indexProduct">View on Online Store</p>
        <router-link :to="`/product/${item.title}`" class="view "
          ><div
            class="hover"
            @mouseenter="mouseActive(index)"
            @mouseleave="mouseNoActive()"
          >
            <i class="fas fa-eye "></i></div
        ></router-link>
        <div>
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
.table-item img {
  width: 70px;
  height: 70px;
  margin: 0px 5px;
}
.product-style {
  position: relative;
}
.product-style .p-view {
  position: absolute;
  top: -10px;
  z-index: 1000;
  background-color: rgb(73, 77, 77) !important;
  border-radius: 5px;
  padding: 2px 3px;
  color: rgb(237, 241, 241) !important;
  font-size: 14px !important;
  text-transform: none !important;
}
.view {
  display: flex;
  align-items: center;
}
.hover {
  margin: 0 !important;
  padding: 0 !important;
}
.table-header {
  /* border-bottom: 1px solid #8b8888; */
  margin: 2% 0;
  padding: 0;
}
.table-header-item {
  border-bottom: 1px solid #8b8888;
}
.table-header .row {
  width: inherit;
}
.table-item {
  border-bottom: 1px solid #8b8888;
  height: 100px;
}
.check {
  transform: scale(1.5) !important;
  margin: 0px 5px;
}

.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: rgb(237, 237, 241);
}
.product-style {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  margin: 0px !important;
  padding: 0px !important;
}
.table-header p {
  font-weight: 550;
  color: #6e7a81;
  font-size: 13px;
  text-transform: uppercase;
}
.image {
  float: left;
  margin: 0 10px;
}
.product-name {
  display: flex;
  align-content: center;
  justify-content: center;
}
.product-name p {
  margin: auto 0;
  padding: 0;
}
</style>

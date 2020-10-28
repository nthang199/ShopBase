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
    <div class="row table-item">
      <div class="col-1">
        <label for="s-checkbos">
          <input type="checkbox" name="" id="" v-bind:checked="check" />
        </label>
      </div>
      <div class="col-7 product-style">
        <div class="image">
          <img
            src="https://img.btdmp.com/10090/10090758/products/0x48@1593161140ba77e5503a.jpeg"
            alt=""
          />
        </div>
        <div class="product-name">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="col-2">
        <p>Type</p>
      </div>
      <div class="col-2">
        <p>Vendor</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemproducs",
  props: { product: { type: Object, default: null } },
  data() {
    return {
      check: false,
    };
  },
  methods: {
    checkedbox() {
      this.check = !this.check;
      //   console.log(this.check);
      //   return this.check;
    },
  },
};
</script>

<style></style>

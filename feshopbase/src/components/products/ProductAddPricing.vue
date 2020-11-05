<template>
  <div class="pricing-type row">
    <div class="col-6">
      <p>Price</p>
      <div class="input-group ">
        <div class="input-group-prepend">
          <span class="input-group-text">USD</span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="priceSale"
          v-on:input="updatePriceSale"
          placeholder="Username"
        />
      </div>
    </div>
    <div class="col-6">
      <p>Compare at price</p>
      <div class="input-group ">
        <div class="input-group-prepend">
          <span class="input-group-text">USD</span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="price"
          v-on:input="updatePrice"
          placeholder="Username"
        />
      </div>
    </div>
    <div class="col-6">
      <p>Cost per item</p>
      <div class="input-group ">
        <div class="input-group-prepend">
          <span class="input-group-text">USD</span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="pricePerItem"
          v-on:input="updatePricePerItem"
          placeholder="Username"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pricing",
  props: {},
  data() {
    return { priceSale: 0, price: 0, pricePerItem: 0 };
  },
  methods: {
    updatePriceSale() {
      this.$emit("updatePriceSale", this.priceSale);
    },
    updatePrice() {
      this.$emit("updatePrice", this.price);
    },
    updatePricePerItem() {
      this.$emit("updatePricePerItem", this.pricePerItem);
    },
  },
};
</script>

<style>
.pricing-type p {
  margin: 2px;
  font-weight: 600;
}
</style>

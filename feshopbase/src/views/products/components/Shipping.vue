<template>
  <div class="shipping-product">
    <div>
      <h4>weight</h4>
      <p>
        Used to calculate shipping rates at checkout and label prices during
        fulfillment.
      </p>
      <p>weight</p>
    </div>
    <div class="row">
      <div class="input-group ">
        <div class="input-group-prepend">
          <!-- <span class="input-group-text">USD</span> -->
        </div>
        <input
          type="text"
          class="form-control col-4"
          v-model="weight"
          placeholder="Username"
        />
        <select class="form-control col-2" id="sel1">
          <option v-for="(item, index) in weightType" :key="index">{{
            item
          }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shipping",
  data() {
    return { weight: 0, weightType: ["kg", "lb", "az", "g"] };
  },
};
</script>

<style>
.shipping-product h4 {
  text-transform: uppercase;
}
.shipping-product {
  padding: 5px 10px;
}
</style>

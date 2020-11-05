<template>
  <div class="inventory-type">
    <p>{{ typeInventory }}</p>
    <div class="input-group ">
      <div class="input-group-prepend"></div>
      <input
        v-if="indexoption != 2"
        type="text"
        class="form-control"
        placeholder="Username"
      />
      <select class="form-control" id="sel1" v-if="indexoption == 2">
        <option v-for="(item, index) in optionPolicy" :key="index">{{
          item
        }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "inventory",
  props: { typeInventory: String, indexoption: Number, optionPolicy: Array },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.inventory-type p {
  margin: 2px;
  font-weight: 600;
}
.form-control {
  border-radius: 5px !important;
}
</style>

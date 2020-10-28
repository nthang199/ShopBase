<template>
  <div class="organization">
    <h5>Organization</h5>
    <div class="form-group input ">
      <label for="formGroupExampleInput" class="">Product type</label>
      <input
        type="text"
        class="form-control"
        placeholder="Product type"
        id="formGroupExampleInput"
        v-model="producttype"
        @input="updateProductType"
      />
    </div>
    <div class="form-group input ">
      <label for="formGroupExampleInput" class="">Vendor</label>
      <input
        type="text"
        class="form-control"
        :class="{ bg: ishover2 }"
        placeholder="Vendor"
        id="formGroupExampleInput"
        v-model="vendor"
        @input="updateVendor"
      />
    </div>
    <div class="form-group collection input">
      <label for="formGroupExampleInput" class="">Collection</label>
      <select
        class="form-control "
        :class="{ bg: ishover }"
        id="collection"
        multiple
        size="2"
        @change="getCollection"
        @mouseenter="mouseActive"
        @mouseleave="mouseNoActive"
      >
        <option @click="getCollection">
          1
        </option>
        <option @click="getCollection">
          2
        </option>
        <option @click="getCollection">
          3
        </option>
        <option @click="getCollection">
          4
        </option>
      </select>
      <p>
        Add this product to a collection so it’s easy to find in your store.
      </p>
    </div>
    <div class="form-group input ">
      <label for="formGroupExampleInput" class="">Tags</label>
      <input
        type="text"
        class="form-control"
        placeholder="Vendor"
        id="formGroupExampleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "organization",
  props: {},
  data() {
    return {
      collection: [],
      ishover: false,
      ishover2: false,
      vendor: "",
      producttype: "",
    };
  },
  methods: {
    getCollection() {
      //   this.ishover = true;
      let opt = document.getElementById("collection");
      this.collection = [];
      for (let i = 0; i < opt.options.length; i++) {
        if (opt.options[i].selected == true) {
          this.collection.push({
            text: opt.options[i].text,
            value: opt.options[i].value,
          });
          console.log(opt.options[i].text, opt.options[i].value);
        }
      }
      this.$emit("getCollection", this.collection);
    },
    mouseActive() {
      this.ishover = true;
    },
    mouseNoActive() {
      this.ishover = false;
    },
    updateVendor(event) {
      this.ishover2 = !this.ishover2;
      this.$emit("updateVendor", event);
    },
    updateProductType(event) {
      this.ishover = !this.ishover;
      this.$emit("updateProductType", event);
    },
  },
  computed: {},
};
</script>

<style>
label {
  font-weight: 500;
}
.input {
  margin: 15px 0px;
}
.collection {
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  padding: 20px 0px;
}
.collection p {
  margin-top: 10px;
}
.bg {
  background-color: rgb(252, 252, 252) !important;
}
</style>

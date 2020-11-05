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
        placeholder="Tags"
        id="formGroupExampleInput"
        v-model="tag"
        @keyup.enter="getTag"
      />
      <span v-for="(item, index) in tags" :key="index">
        <p class="pricetag" @click="deleteTag(index)">{{ item }}</p>
      </span>
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
      tags: ["tag1"],
      tag: "",
    };
  },
  methods: {
    getCollection() {
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
    getTag() {
      this.tags.push(this.tag);
      this.tag = "";
    },
    deleteTag(index) {
      this.tags.splice(index, 1);
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
.add-product-list-tag {
  margin: 5px 0px;
}
.add-product-list-tag-item {
  float: left;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 5px;
  position: relative;
}

.pricetag {
  white-space: nowrap;
  position: relative;
  margin: 5px 5px 0 10px;
  display: inline-block;
  height: 25px;
  border-radius: 0 5px 5px 0;
  padding: 0 25px 0 15px;
  background: #e8edf0;
  border: 1px solid #c7d2d4;
  color: rgb(128, 125, 125);
  line-height: 23px;
}
.pricetag:after {
  position: absolute;
  right: 0;
  margin: 1px 7px;
  font-weight: bold;
  font-size: 19px;
  content: "\00D7";
}
.pricetag:before {
  position: absolute;
  background: #e8edf0;
  content: "\25CF";
  color: white;
  text-shadow: 0 0 1px #aaa;
  font-size: 12px;
  line-height: 13px;
  text-indent: 6px;
  top: 3px;
  left: -10px;
  width: 18px;
  height: 17px;
  transform: rotate(45deg);
  border-left: 1px solid #c7d2d4;
  border-bottom: 1px solid #c7d2d4;
}
</style>

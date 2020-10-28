<template>
  <div>
    <p>information</p>
  </div>
</template>

<script>
export default {
  name: "viewProduct",
  props: { listProducts: Array },
  data() {
    return { title: "", product: {} };
  },
  created() {
    this.title = this.$route.fullPath.slice(
      this.$route.fullPath.lastIndexOf("/") + 1,
      this.$route.fullPath.length
    );
    for (let i = 0; i < this.listProducts.length; i++) {
      if (this.title == this.listProducts[i].title) {
        this.product = this.listProducts[i];
      }
    }
  },
};
</script>

<style></style>

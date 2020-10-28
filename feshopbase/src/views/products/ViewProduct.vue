<template>
  <div class="container">
    <div class="row">
      <div class="col-6 ">
        <div class="image">
          <img :src="product.listPicture[0]" alt="" />
        </div>
      </div>
      <div class="col-6">
        <div class="title info">
          <h2>Title</h2>
        </div>
        <div class="option info">
          <p>Size</p>
          <div class="row">
            <p class="col-1">s</p>
            <p class="col-1">s</p>
            <p class="col-1">s</p>
          </div>
        </div>
        <div class="option info">
          <p>Size</p>
          <div class="row">
            <p class="col-1">s</p>
            <p class="col-1">s</p>
            <p class="col-1">s</p>
          </div>
        </div>
        <div class="info">
          <p>Quantity</p>
          <div class="row">
            <!-- <div class="col-4">
              <input type="number" />
            </div> -->
            <div class="input-group col-4">
              <input
                type="number"
                class="form-control"
                value="1"
                placeholder="Username"
              />
            </div>
            <div class="col-6">
              <div class="btn btn-primary">Add To Cart</div>
            </div>
            <!-- <div class="col-2">
              <input type="number" />
            </div>
            <div class="col-2">
              <input type="number" />
            </div> -->
          </div>
        </div>
        <div class="info">
          <div class="pay-methods">
            <img
              src="https://img.btdmp.com/themes/3/assets/0x900@trust_badge.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
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

<style>
.image img {
  width: 100%;
  height: auto;
}
.title h2 {
  padding-bottom: 20px;
  border-bottom: 1px solid #8b8888;
}
.info {
  margin: 0px 10%;
}
.pay-methods {
  margin: 15px 0px;
}
.pay-methods img {
  width: 120%;
  height: auto;
}
</style>

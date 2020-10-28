<template>
  <div id="header">
    <div class="row">
      <div class="col-2"><p class="title">Products</p></div>
    </div>
    <div class="row">
      <div class="col-1 btn-customize">
        <button type="button" class="btn btn-primary">Export</button>
      </div>
      <div class="col-1 btn-customize">
        <button type="button" class="btn btn-primary">Import</button>
      </div>
      <div class="col-5 btn-customize"></div>
      <div class="col-3 btn-customize">
        <button type="button" class="btn btn-primary">Add from Services</button>
      </div>
      <div class="col-2 btn-customize">
        <router-link to="/allproducts/add" v-bind:parentmenu="parentmenu"
          ><button type="button" class="btn btn-primary">
            Add Products
          </button></router-link
        >
      </div>
    </div>
    <div>
      <ul class="subrouter">
        <li><a href="#">All</a></li>
        <li><a href="#">All</a></li>
        <li><a href="#">All</a></li>
      </ul>
    </div>
    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <input type="text" class="form-control" placeholder="Search product" />
      </div>
    </div>
    <!-- <div class="row table-header">
      <div class="col-1">
        <label for="s-checkbos">
          <input type="checkbox" name="" id="" />
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
          <input type="checkbox" name="" id="" />
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    parentmenu: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
#header {
}
.btn-customize {
  text-align: right;
  align-self: end;
  padding: 5px;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.subrouter {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;

  margin: 20px 0px;
  padding: 0;
}
.subrouter li {
  margin-right: 30px;
  align-self: start;
}
.subrouter li a {
  color: black;
}
.subrouter li a:hover,
.subrouter li a:active {
  color: black;
  text-decoration-color: blue;
}
.table-header {
  border-bottom: 1px solid #8b8888;
  margin: 0;
  padding: 0;
}
.table-item {
  border-bottom: 1px solid #8b8888;
  height: 100px;
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

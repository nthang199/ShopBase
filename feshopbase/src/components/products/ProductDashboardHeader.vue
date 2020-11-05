<template>
  <div id="header">
    <div class="row">
      <div class="col-2"><h2 class="header-title--h2">Products</h2></div>
    </div>
    <div class="row header-btn">
      <div class="col-6 header-btn-customize-left">
        <button type="button" class="header-btn--customize">
          <i class="mdi mdi-file-export mdi-18px"></i> Export
        </button>

        <button type="button" class="header-btn--customize">
          <i class="mdi mdi-file-import mdi-18px"></i>Import
        </button>
      </div>

      <div class="col-6 header-btn-customize-right">
        <button
          type="button"
          class="header-btn--customize header-btn--customize-addform"
        >
          <i class="mdi mdi-briefcase-plus-outline mdi-18px"></i> Add from
          Services
        </button>
        <router-link to="/addproducts"
          ><button
            type="button"
            class="header-btn--customize header-btn--customize-add "
          >
            <i class="mdi mdi-plus mdi-18px"></i> Add products
          </button></router-link
        >
      </div>
    </div>
    <div>
      <ul class="subrouter">
        <li>
          <router-link
            :class="{ active: tab == 'all' || tab == '/allproducts' }"
            :to="{
              name: 'ProductDashboardTab-All',
              params: { nametab: 'all' },
            }"
            >All</router-link
          >
        </li>
        <li>
          <router-link
            :class="{ active: tab == 'published' }"
            :to="{
              name: 'ProductDashboardTab-Published',
              params: { nametab: 'published' },
            }"
            >Available products</router-link
          >
        </li>
        <li>
          <router-link
            :class="{ active: tab == 'unpublished' }"
            :to="{
              name: 'ProductDashboardTab-Unpublished',
              params: { nametab: 'unpublished' },
            }"
            >Unavailable products</router-link
          >
        </li>
      </ul>
    </div>
    <div>
      <div class="row">
        <div class="input-group mb-3 col-10">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            class="form-control input-search "
            placeholder="Search product"
          />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn-search form-control header-btn--customize-addform"
          >
            More filter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: { tab: String },
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#header {
  color: #1a1f23;
}
.header-btn-customize-left {
  text-align: left;
  align-self: end;
  padding: 10px 3px;
}
.header-btn-customize-right {
  text-align: right;
  align-self: end;
  padding: 10px 3px;
}

.header-title--h2 {
  font-size: 33px;
  font-weight: 850 !important;
}
.header-btn--button {
  padding: 5px 10px;
  border: 1px solid #979696;
}

.header-btn--customize {
  border-radius: 5px;
  border: 1px solid rgba(145, 155, 161, 0.24);
  padding: 6px 8px;
  background-color: rgba(219, 223, 225, 0.24);
  margin-right: 10px;
  color: #4d4b4b;
  font-size: 14px;
}
.header-btn--customize:hover {
  background-color: rgba(205, 211, 213, 0.5);
  border: 1px solid rgba(131, 143, 149, 0.5);
}
.header-btn--customize-add {
  background-color: #129ff7;
  color: #fff;
  font-weight: 550;
}
.header-btn--customize-add:hover {
  background-color: #0f96eb;
  color: #fff;
  font-weight: 550;
}
.header-btn--customize-addform {
  font-weight: 550 !important;
}
.btn-search {
  border-radius: 5px;
  border: 1px solid rgba(145, 155, 161, 0.24);

  background-color: rgba(219, 223, 225, 0.24);
  float: right;
  color: #4d4b4b;
  font-size: 14px;
}
/**********************Subrouter**************************/
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
.subrouter .active {
  border-bottom: 2px solid #0089de;
  color: rgb(44, 43, 43) !important;
}

.subrouter li a {
  color: rgb(153, 150, 150);
  line-height: 20px;
  text-decoration: none;
}
.subrouter li a:hover,
.subrouter li a:active {
  color: rgb(44, 43, 43);
  text-decoration: none;
}
/***************Button****************/
.input-search {
  background-color: rgb(243, 243, 243) !important;
  height: 500px;
}
.input-search:hover,
.input-search:active {
  background-color: rgb(214, 213, 213) !important;
}
</style>

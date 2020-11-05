<template>
  <div class="pro-availability">
    <h5>Product availability</h5>
    <p>Manage the availability of the product in these channels</p>
    <div class="check-box ">
      <div class="">
        <label for="s-checkbos" class="checkbox">
          <input type="checkbox" class="check" name="" id="" />
        </label>
      </div>
      <div class="caption">
        <span>Online store listing pages</span>
        <br />
        <p>Homepage, collection page, search page...</p>
      </div>
    </div>
    <div class="check-box ">
      <div class="">
        <label for="s-checkbos" class="checkbox">
          <input type="checkbox" class="check" name="" id="" />
        </label>
      </div>
      <div class="caption">
        <span>Search Engine Bot Crawlers, Sitemap files</span>
        <br />
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proAvailability",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.pro-availability p {
  font-size: 16px;
}
.checkbox {
  float: left;
  margin-right: 2px;
}
.caption p {
  font-size: 13px;
}
.check {
  transform: scale(1.2);
}
</style>

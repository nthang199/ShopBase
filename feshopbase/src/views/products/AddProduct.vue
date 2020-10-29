<template>
  <div class="content ">
    <div class="container">
      <div class="add-product">
        <router-link to="/allproducts">
          <div v-bind:class="{ previous: product.title != '' }">
            <i class="fas fa-caret-left"></i>
            <!-- {{ $route.name }} -->
            Products
          </div>
        </router-link>
        <div>
          <p class="title">{{ $route.name }}</p>
        </div>
        <div class="save-product" v-if="product.title != ''">
          <div class="">
            <div class="row">
              <div class="col-2 save">
                <div class="save-p">
                  <p>Unsave change</p>
                </div>
              </div>
              <div class="col-6"></div>
              <div class="col-2">
                <a class="btn btn-default">Discard</a>
              </div>
              <div>
                <a class="btn btn-primary" @click="saveProduct">Save changes</a>
              </div>
            </div>
          </div>
        </div>
        <div class="info-product">
          <div class="info-product-left">
            <div class="block">
              <div class="title-product ">
                <h5>Title</h5>
                <input
                  type="text"
                  class="form-control"
                  placeholder="name product"
                  v-model="product.title"
                />
                <p>{{ product.title.length }} /255</p>
              </div>
              <div class="title-product">
                <h5>Description</h5>
                <textarea
                  type="text"
                  class="form-control"
                  rows="5"
                  placeholder="Description product"
                  v-model="product.description"
                />

                <p>{{ product.description.length }} /255</p>
              </div>
            </div>

            <div class="image-product block">
              <UploadImage @image="imageList"></UploadImage>
            </div>
            <div class="pricing block">
              <h5>Spricing</h5>
              <Pricing
                @updatePriceSale="updatePriceSale"
                @updatePrice="updatePrice"
                @updatePricePerItem="updatePricePerItem"
              ></Pricing>
            </div>
            <div class="inventory block">
              <h5>Inventory</h5>
              <div class="row">
                <div
                  class="col-6"
                  v-for="(item, index) in typeInventory"
                  :key="index"
                >
                  <Inventory
                    @updatePrice="updatePrice"
                    :typeInventory="item"
                    :indexoption="index"
                    :optionPolicy="optionPolicy"
                  ></Inventory>
                </div>
                <div class="row">
                  <div class="checkbox col-12">
                    <label
                      ><input type="checkbox" />
                      Allow customers to purchase this product when it's out of
                      stock
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="shipping block">
              <h5>Shipping</h5>
              <Shipping></Shipping>
            </div>
            <div class="variant block">
              <div class="list-variant">
                <Variant
                  class="padding"
                  @getListVariant="getListVariant"
                  @getOptions="getOptions"
                ></Variant>
              </div>
            </div>
          </div>

          <div class="info-product-right">
            <div class="block">
              <ProductAvailability></ProductAvailability>
            </div>
            <div class="block">
              <Organization
                @getCollection="getCollection"
                @updateVendor="updateVendor"
                @updateProductType="updateProductType"
              ></Organization>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImage from "./components/UploadImage";
import Pricing from "./components/Pricing";
import Inventory from "./components/Inventory";
import Shipping from "./components/Shipping";
import Variant from "./components/Variant";
import ProductAvailability from "./components/ProductAvailability";
import Organization from "./components/Organization";
export default {
  name: "addproduct",
  props: {
    parentmenu: {
      type: Number,
      default: 1,
    },
  },
  components: {
    UploadImage,
    Pricing,
    Inventory,
    Shipping,
    Variant,
    ProductAvailability,
    Organization,
  },
  data() {
    return {
      active: false,
      product: {
        slug: "",
        title: "",
        description: "",
        type: "",
        options: [],
        variant: [],
        image: [],
        listPicture: [],
        priceSale: 0,
        price: 0,
        pricePerItem: 0,
        collection: [],
        vendor: "",
      },

      typeInventory: [
        "SKU ( stock keeping unit)",
        "Barcode (ISBN, UPC, GTIN, etc.)",
        "Inventory policy",
        "Quality",
      ],
      optionPolicy: [
        "Don't track inventory",
        "ShopBase tracks this product's inventory",
      ],
    };
  },
  methods: {
    imageList(image, listPicture) {
      this.product.image = [];
      this.product.listPicture = [];
      this.product.image = image;
      this.product.listPicture = listPicture;
      console.log(this.image);
    },
    updatePriceSale(price) {
      if (!isNaN(parseInt(price))) {
        this.product.priceSale = parseInt(price);
      }
    },
    updatePrice(price) {
      if (!isNaN(parseInt(price))) {
        this.product.price = parseInt(price);
      }
    },
    updatePricePerItem(price) {
      if (!isNaN(parseInt(price))) {
        this.product.pricePerItem = parseInt(price);
      }
    },
    filterOptions(string) {
      return string != "";
    },
    getOptions(options) {
      this.product.options = [];
      for (let i = 0; i < options.length; i++) {
        let valueTemp = options[i].value.split(",");
        let arr = valueTemp.filter(this.filterOptions);
        this.product.options.push({ name: options[i].name, value: arr });
      }
    },
    getListVariant(variantList) {
      this.product.variant = variantList;
    },
    getCollection(collection, vendor) {
      this.product.collection = [];
      this.product.collection = collection;
      this.product.vendor = vendor;
    },
    updateVendor(event) {
      this.product.vendor = event.target.value;
    },
    updateProductType(event) {
      this.product.type = event.target.value;
    },
    saveProduct() {
      this.$emit("saveProduct", this.product);
    },
  },
};
</script>

<style>
.block {
  border: 1px solid #000;
  padding: 15px 5px;
  margin: 15px 1px;
  border-radius: 5px;
}
.add-product {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.previous {
  margin-top: 60px;
}
.save-product {
  width: 75%;
  background-color: white;
  border-radius: 8px;
  position: fixed;
  top: 5px;
  z-index: 1000;
  border: 1px solid #8b8888;
}
.save-product .row {
  padding: 5px 0px;
}
.save {
  margin-top: 6px;
  display: flex;
  justify-items: center;
  align-content: center;
  padding: auto 0px;
}
.save p {
  margin: 0px;
  font-size: 18px;
}
.btn {
  border: 1px solid #a19f9f !important;
  font-size: 15px !important;
}
.btn-primary {
  color: white !important;
}

.add-product .row {
  margin: 0;
}
.add-product .row .col-7 {
  border: 1px solid gray;
}

.add-product .row .col-4 {
  border: 1px solid gray;
}

.info-product .info-product-left {
  width: 68%;
  float: left;
}
.info-product .info-product-right {
  width: 30%;
  float: right;
}
.pricing .row .col-6 {
  margin: 5px 0;
}
.inventory .row .col-6 {
  margin: 5px 0;
}
.variant-header {
  padding-top: 10px;
  border-bottom: 1px solid #8b8888;
}
.padding {
  padding: 10px 0px;
}
.variant .row .col-6 {
  padding: 0;
}
.variant .row .col-6 p {
  text-align: right;
  font-weight: 400;
}
.variant .list-variant {
  padding: 10px 5px;
}
.variant-header a {
  color: #1098f3;
}
.variant-header a:hover,
.variant-header a:active {
  text-decoration: underline;
  color: #1098f3;
}
</style>

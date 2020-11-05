<template>
  <div class="content ">
    <div class="container">
      <div class="add-product">
        <div class="save-product" v-if="product.title != ''">
          <div class="">
            <div class="row">
              <div class="col-3 save">
                <div class="save-p">
                  <p>Unsave change</p>
                </div>
              </div>
              <div class="col-5"></div>
              <div class="col-2">
                <a class="btn btn-default">Discard</a>
              </div>
              <div>
                <a class="btn btn-save" @click="saveProduct">Save changes</a>
              </div>
            </div>
          </div>
        </div>
        <div class="add-product-header">
          <div class="add-product-back">
            <router-link to="/allproducts">
              <div>
                <span> <i class="fas fa-caret-left"></i></span>
                <span>Products</span>
              </div>
            </router-link>
          </div>
          <div>
            <h1 class="title">{{ $route.name }}</h1>
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
                <p class="header-title-des">{{ product.title.length }} /255</p>
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
              </div>
            </div>

            <div class="image-product block">
              <ProductAddUploadImage @image="imageList"></ProductAddUploadImage>
            </div>
            <div class="pricing block">
              <h5>Spricing</h5>
              <ProductAddPricing
                @updatePriceSale="updatePriceSale"
                @updatePrice="updatePrice"
                @updatePricePerItem="updatePricePerItem"
              ></ProductAddPricing>
            </div>
            <div class="inventory block">
              <h5>Inventory</h5>
              <div class="row">
                <div
                  class="col-6"
                  v-for="(item, index) in typeInventory"
                  :key="index"
                >
                  <ProductAddInventory
                    @updatePrice="updatePrice"
                    :typeInventory="item"
                    :indexoption="index"
                    :optionPolicy="optionPolicy"
                  ></ProductAddInventory>
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
              <ProductAddShipping></ProductAddShipping>
            </div>
            <div class="variant block">
              <div>
                <ProductAddVariant
                  @getListVariant="getListVariant"
                  @getOptions="getOptions"
                ></ProductAddVariant>
              </div>
            </div>
          </div>

          <div class="info-product-right">
            <div class="block">
              <ProductAddAvailability></ProductAddAvailability>
            </div>
            <div class="block">
              <ProductAddOrganization
                @getCollection="getCollection"
                @updateVendor="updateVendor"
                @updateProductType="updateProductType"
              ></ProductAddOrganization>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAddUploadImage from "../../components/products/ProductAddUploadImage";
import ProductAddPricing from "../../components/products/ProductAddPricing";
import ProductAddInventory from "../../components/products/ProductAddInventory";
import ProductAddShipping from "../../components/products/ProductAddShipping";
import ProductAddVariant from "../../components/products/ProductAddVariant";
import ProductAddAvailability from "../../components/products/ProductAddAvailability";
import ProductAddOrganization from "../../components/products/ProductAddOrganization";
export default {
  name: "addproduct",
  props: {
    parentmenu: {
      type: Number,
      default: 1,
    },
  },
  components: {
    ProductAddUploadImage,
    ProductAddPricing,
    ProductAddInventory,
    ProductAddShipping,
    ProductAddVariant,
    ProductAddAvailability,
    ProductAddOrganization,
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
      this.$router.push({ path: "/allproducts/tab-all" });
    },
  },
};
</script>

<style>
.block {
  border: 1px solid rgb(218, 218, 218);
  padding: 25px 18px;
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
}
.block h5 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #363e43;
}
.block .header-title-des {
  margin-top: 5px;
  margin-bottom: 25px;
  font-size: 12px;
}
/*** add product header ****/
.add-product {
  width: 100%;
  height: 100%;
  margin-top: 7.5%;
  margin-left: 10px;
  margin-right: 10px;
}
.add-product-header {
  margin-bottom: 5%;
}
.add-product-back {
  margin-bottom: 20px;
}
.add-product-back span {
  padding-right: 10px;
  text-transform: uppercase;
  font-size: 13px;
  color: #9c9c9c;
}
.add-product .title {
  font-size: 31px;
  font-weight: 900;
  color: #525c64;
  margin-top: 5px;
}

/*     Save Product         **/
.save-product {
  background-color: #fff;
  border-radius: 13px;
  position: fixed;
  top: 15px;
  z-index: 1000;
  width: 71.5%;

  box-shadow: 0 0 0 2px rgba(44, 51, 54, 0.06);
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
.btn-save {
  background-color: #129ff7 !important;
  color: #fff !important;
}
.btn-save:hover,
.btn-save:active {
  background-color: #0f96eb !important;
}
/*************************/
.add-product .btn {
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

/******Infor Product**********/
.info-product .info-product-left {
  width: 66%;
  float: left;
}

.info-product .info-product-right {
  width: 30%;
  float: right;
  margin-right: 2%;
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

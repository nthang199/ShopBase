<template>
  <div class="details">
    <div>
      <div class="header-product ">
        <div class="row container1">
          <div class="col-3">
            <img
              src="https://img.btdmp.com/files/10056148/2019/12/13/0x180@15762128443cd0687d6e.png"
              alt=""
            />
          </div>
          <div class="col-8 details-header">
            <ul>
              <li>shop</li>
              <li>order tracking</li>
              <li>about us</li>
              <li>apqs</li>
              <li>contact us</li>
            </ul>
          </div>
          <div class="col-1">
            <p class="cart">
              <i class="fas fa-cart-plus cart"></i
              ><span> +{{ getTotalProduct() }}</span>
            </p>
            <!-- <p>{{ cart.length }}</p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="details-content">
      <div class="container1 ">
        <div class="row">
          <div class="col-7">
            <div class="image">
              <img :src="product.listPicture[0]" alt="" />
              <div class="sub-image">
                <div
                  class="sub-image-item"
                  v-for="(itemImage, indexImage) in product.listPicture"
                  :key="indexImage"
                >
                  <img :src="product.listPicture[indexImage]" alt="" />
                </div>
                <!-- <div class="sub-image-item">
                  <img :src="product.listPicture[0]" alt="" />
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="title ">
              <h2>{{ product.title }}</h2>
              <div>
                <p>{{ price }}</p>
              </div>
            </div>
            <div
              class="option"
              v-for="(item, index) in product.options"
              :key="index"
            >
              <div class="option-name">
                <p>{{ item.name }}:{{ getValue(index) }}</p>
                <div
                  v-for="(itemValue, indexValue) in item.value"
                  :key="indexValue"
                >
                  <span
                    @click="getOptionProduct(index, indexValue)"
                    :class="{
                      optionactive:
                        getValue(index) ==
                        product.options[index].value[indexValue],
                    }"
                    >{{ itemValue }}</span
                  >
                </div>
              </div>
            </div>
            <div class="input">
              <button class="btn-custom btn-subtract" @click="subQuantity">
                <span>-</span>
              </button>
              <input type="number" value="1" min="1" v-model="quantity" />
              <button class="btn-custom btn-add-quantity " @click="addQuantity">
                <span>+</span>
              </button>
            </div>
            <div class="input ">
              <div class="add-to-cart" @click="addtocart()">
                Add to cart
              </div>
            </div>
            <div class="method-payment">
              <img
                src="https://img.btdmp.com/files/10056148/2020/02/25/0x540@158262777248aa6238ca.png"
                alt=""
              />
            </div>
            <div class="tags-product">
              <span v-for="(item, index) in product.tags" :key="index">
                <p class="pricetag">{{ item }}</p>
              </span>
            </div>
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
    return {
      title: "",
      product: {},
      optionChoose: [],
      check: true,
      quantity: 1,
      price: 0,
      productAddToCart: {},
      cart: [],
    };
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
    // this.productAddToCart = null;
    this.productAddToCart.orderTitle = this.product.title;
    this.productAddToCart.orderDescription = this.product.description;
    this.productAddToCart.orderType = this.product.type;
    this.productAddToCart.orderVendor = this.product.vendor;
    this.productAddToCart.orderCollection = this.product.collection;
    this.productAddToCart.orderQuantity = this.quantity;
  },
  methods: {
    getOptionProduct(index, i) {
      if (this.optionChoose.length == 0) {
        this.optionChoose.push({
          name: this.product.options[index].name,
          value: this.product.options[index].value[i],
        });
      } else {
        if (
          this.optionChoose.findIndex((x) => {
            return x.name == this.product.options[index].name;
          }) == -1
        ) {
          this.optionChoose.push({
            name: this.product.options[index].name,
            value: this.product.options[index].value[i],
          });
        } else {
          this.optionChoose.splice(
            this.optionChoose.findIndex((x) => {
              return x.name == this.product.options[index].name;
            }),
            1,
            {
              name: this.product.options[index].name,
              value: this.product.options[index].value[i],
            }
          );
        }
      }
      var option = [];
      this.optionChoose.map((x) => {
        option.push(x.value);
      });
      var optionProChoose = option.join("/");
      for (let i = 0; i < this.product.variant.length; i++) {
        if (this.product.variant[i].variant == optionProChoose) {
          this.productAddToCart.variant = this.product.variant[i];
          // console.log(this.productAddToCart.variant);
        }
      }
      this.getPriceItem();
      this.productAddToCart.orderQuantity = this.quantity;
      this.productAddToCart.orderPrice = this.price;
    },
    addtocart() {
      this.cart.push(this.productAddToCart);
    },
    getValue(index) {
      for (let i = 0; i < this.optionChoose.length; i++) {
        if (this.optionChoose[i].name == this.product.options[index].name) {
          return this.optionChoose[i].value;
        }
      }
    },
    optionActive(index) {
      for (let i = 0; i < this.product.options[index].length; i++) {
        return {
          optionactive:
            this.getValue(index) == this.product.options[index].value[i],
        };
      }
    },
    getTotalProduct() {
      return this.cart.reduce(function(total, currentValue) {
        return total + currentValue.orderQuantity;
      }, 0);
    },
    subQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
      this.productAddToCart.orderQuantity = this.quantity;
    },
    addQuantity() {
      this.quantity += 1;
      this.productAddToCart.orderQuantity = this.quantity;
    },
    getPriceItem() {
      let itemChoose = [];
      for (let index = 0; index < this.optionChoose.length; index++) {
        itemChoose.push(this.optionChoose[index].value);
      }

      console.log(itemChoose.join("/"));
      for (let i = 0; i < this.product.variant.length; i++) {
        if (itemChoose.join("/") == this.product.variant[i].variant) {
          this.price = this.product.variant[i].price;
        }
      }
    },
  },
};
</script>

<style>
.details {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.details .container1 {
  width: 90%;
  height: 100%;
  /* padding-right: 55px !important;
  padding-left: 55px !important; */
  /* padding: 0 5% !important; */
  margin: 0% 5% 0% 5%;
}
.details .header-product {
  border: 1px solid #ccc;
  padding: 1% 0px;
}
.details .title {
  padding: 20px 2% 0px 2%;
}
.details .title p {
  padding-top: 0;
  margin: 0;
  color: #f00;
  font-size: 25px;
}
.details .header-product .col-8,
.details .header-product .col-1 {
  padding-top: 2%;
}
.details-header {
}
.details .details-header li {
  float: left;
  margin-right: 50px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  /* padding: ; */
}
.details .details-header li:hover,
.details .details-header li:active {
  color: #333;
  font-weight: 500;
}
/* .header-product .row {
  margin: 2% 0px !important;
} */
.details .image img {
  width: auto;
  height: 530px;
}
.details .sub-image {
  margin: 15px 0px;
}
.details .sub-image-item {
  float: left;
}
.details .sub-image img {
  width: 170px;
  height: 120px;
  margin-right: 10px;
}
.details .title h2 {
  padding-bottom: 10px;
  margin: 0 !important;
}
.details-content {
  margin-top: 25px;
}
.details .details-content .col-5 {
  padding-left: 0;
}
.details .info {
  margin: 0px 10%;
}

.details .option-name {
  margin: 5px 0px 3px 0px;
  font-weight: 500;
}
.details .option {
  padding: 20px 2%;
}
.details .option p {
  margin: 5px 0px;
}
.details .option span {
  float: left;
  padding: 3px 12px;
  text-align: center;
  margin-right: 10px;
  text-transform: uppercase;
  border: 1px solid #ccc;
}
.details .optionactive {
  border: 1px solid rgb(51, 51, 51) !important;
}

/* .pay-methods {
  margin: 15px 0px;
}
.pay-methods img {
  width: 120%;
  height: auto;
}*/
.details .cart {
  font-size: 25px;
  position: relative;
}
.details .cart span {
  position: absolute;
  left: 40%;
  bottom: 60%;
  color: #f00;
  font-size: 13px;
  font-weight: 600;
}
.details .input {
  padding: 7% 2% 6% 2%;
  position: relative;
  /* margin: 7% 0%; */
  margin: 0 !important;
}
.details .btn-custom {
  height: 42px;
  width: 30px;
  font-weight: 500;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(13, 13, 15, 0.15);
}

.details .input input {
  width: 80px !important;
  padding: 8px 10px 8px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: absolute;
  left: 8%;
}
.details input:focus {
  outline: none;
}
.details .btn {
  margin: 8px 0 !important;
  display: inline-block !important;
  border: 1px solid #ccc !important;
  border-radius: 4px 0px 0px 4px !important;
  box-sizing: border-box !important;
  height: 42px;
  width: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  z-index: 9999;
}
.details .btn-subtract {
  border-radius: 5px 0 0px 5px;
  position: absolute;
  /* left: 10%; */
}
.details .btn-add-quantity {
  border-radius: 0px 5px 5px 0px;
  position: absolute;
  left: 20%;
}
.details .add-to-cart {
  border: 1px solid #ccc;
  height: 65px;
  width: 300px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px !important;
  background-color: #106cd6;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 0 0 2px rgba(45, 45, 48, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  text-transform: uppercase;
  font-weight: 600;
}
.details .add-to-cart:hover,
.details .add-to-cart:active {
  background-color: #0565d3;
}
.details .method-payment {
  margin: 1px 2%;
}
.details .method-payment img {
  width: 102%;
  height: auto;
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
.tags-product {
  margin: 10px 3%;
}
</style>

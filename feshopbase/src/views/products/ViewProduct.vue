<template>
  <div class="container">
    <div class="header-product">
      <div class="row">
        <div class="col-11"></div>
        <div class="col-1">
          <p class="cart">
            <i class="fas fa-cart-plus cart"></i>{{ cart.length }}
          </p>
          <!-- <p>{{ cart.length }}</p> -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 ">
        <div class="image">
          <img :src="product.listPicture[0]" alt="" />
        </div>
      </div>
      <div class="col-6">
        <div class="title info">
          <h2>{{ product.title }}</h2>
        </div>
        <div
          class="option info"
          v-for="(itemOption, index) in product.options"
          :key="index"
        >
          <p>{{ itemOption.name }}: {{ getValue(index) }}</p>
          <div class="row">
            <div v-for="(item, i) in itemOption.value" :key="i">
              <div class="col-1" @click="getOptionProduct(index, i)">
                <p>{{ item }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="info">
          <p>Quantity</p>
          <div class="row">
            <div class="input-group col-4">
              <input
                type="number"
                class="form-control"
                v-model="sl"
                placeholder="Username"
              />
            </div>
            <div class="col-6">
              <div class="btn btn-primary" @click="addtocart">Add To Cart</div>
            </div>
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
    return {
      title: "",
      product: {},
      optionChoose: [],
      check: true,
      sl: 1,
      proAddToCart: {},
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
          this.proAddToCart.variant = this.product.variant[i];
          console.log(this.proAddToCart.variant);
        }
      }
      this.proAddToCart.title = this.product.title;
      this.proAddToCart.description = this.product.description;
      this.proAddToCart.type = this.product.type;
      this.proAddToCart.vendor = this.product.vendor;
      this.proAddToCart.collection = this.product.collection;
      this.proAddToCart.soluong = this.sl;
    },
    addtocart() {
      this.cart.push(this.proAddToCart);
    },
    getValue(index) {
      for (let i = 0; i < this.optionChoose.length; i++) {
        if (this.optionChoose[i].name == this.product.options[index].name) {
          return this.optionChoose[i].value;
        }
      }
    },
    getTotalProduct() {
      return this.cart.reduce(function(total, currentValue) {
        return total + currentValue.soluong;
      }, 0);
    },
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
.option .col-1 p {
  width: 35px;
  height: 35px;
  padding: 5px;
  text-align: center;
  background-color: aqua;
}

.pay-methods {
  margin: 15px 0px;
}
.pay-methods img {
  width: 120%;
  height: auto;
}
.cart {
  font-size: 30px;
}
</style>

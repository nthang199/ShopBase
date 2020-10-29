<template>
  <div>
    <div class="variant-header">
      <div class="row">
        <h5 class="col-6">Variant</h5>
        <a class="col-6" @click="addVariant1" v-if="variant.length == 0"
          ><p>Add variant</p></a
        >
        <a class="col-6" @click="cancelVariant" v-if="variant.length > 0"
          ><p>Cancel</p></a
        >
      </div>
      <p>
        Add variants if this product comes in multiple versions, like different
        sizes or colors.
      </p>
    </div>
    <div class="variant" v-if="variant.length > 0">
      <div class="form-group row">
        <label for="formGroupExampleInput" class="col-3">Option name</label>
        <p class="col-1"></p>
        <label for="formGroupExampleInput" class="col-6">Option values</label>
      </div>
      <div
        class="row option-list"
        v-for="(optionItem, index) in variant"
        :key="index"
      >
        <input
          type="text"
          class="form-control col-3"
          id="formGroupExampleInput"
          v-model="optionItem.name"
        />
        <p class="col-1 "></p>
        <div class="col-6 tag-parent">
          <input
            type="text"
            class="form-control  "
            id="formGroupExampleInput"
            placeholder="Separate options with comma"
            v-model="optionItem.value"
            @change="getListVariant()"
            @input="getListVariant()"
          />
          <!-- <div class="tag">
            a
          </div> -->
        </div>
        <div class="col-1">
          <div class="form-control  ">
            <a @click="deleteOption(index)"><i class="fas fa-trash-alt"></i></a>
          </div>
        </div>
      </div>
      <div class="variant-list">
        <div class="variant-list-header">
          <div class="row">
            <div class="col-1"><p></p></div>
            <div class="col-2">Variant</div>
            <div class="col-3">Price</div>
            <div class="col-3">SKU</div>
            <div class="col-3">Barcode</div>
          </div>
        </div>
        <div class="variant-list-header">
          <div class="row" v-for="(item, index) in variantList" :key="index">
            <div class="col-1">
              <label for="s-checkbos">
                <input
                  type="checkbox"
                  name=""
                  id="action"
                  value="true"
                  v-model="item.check"
                />
              </label>
            </div>
            <div class="col-2 ">
              {{ item.variant }}
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control "
                id="formGroupExampleInput"
                v-model="item.price"
              />
            </div>
            <div class="col-3 ">
              <input
                type="text"
                class="form-control "
                id="formGroupExampleInput"
                placeholder="SKU"
                v-model="item.SKU"
              />
            </div>
            <div class="col-3 ">
              <input
                type="text"
                class="form-control "
                id="formGroupExampleInput"
                placeholder="Barcode"
                v-model="item.Barcode"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-add">
        <a @click="addVariant2" v-if="variant.length < 3">
          Add another option</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "variant",
  data() {
    return {
      variant: [],
      option: [],
      variantList: [],
      string: "test",
      i: 0,
    };
  },
  methods: {
    cancelVariant() {
      this.variant = [];
    },
    deleteOption(index) {
      this.variant.splice(index, 1);
      this.getListVariant();
    },
    addVariant1() {
      this.variant.push({ name: "Size", value: "" });
    },
    addVariant2() {
      if (this.variant.length < 3) {
        this.variant.push({ name: "", value: "" });
      }
    },
    getListVariant() {
      this.$emit("getOptions", this.variant);
      this.option = [];
      this.variantList = [];
      for (let i = 0; i < this.variant.length; i++) {
        if (this.variant[i].value != "") {
          this.option.push(this.variant[i].value.split(","));
          for (let index = 0; index < this.option.length; index++) {
            for (let z = 0; z < this.option[index].length; z++) {
              if (this.option[index][z] == "") {
                this.option[index].splice(z, 1);
              }
            }
            // console.log(this.option[index]);
          }
        }
      }
      const cartesian = (...a) =>
        a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
      if (this.option.length == 1) {
        let output = this.option[0];
        for (let j = 0; j < output.length; j++) {
          if (output[j] != "") {
            this.variantList.push({
              check: "true",
              variant: output[j],
              price: 0,
              SKU: "",
              Barcode: "",
            });
          }
        }
      } else {
        let output = cartesian(...this.option);
        for (let j = 0; j < output.length; j++) {
          let outputTem = output[j];
          for (let i = 0; i < outputTem.length; i++) {
            if (outputTem[i] == "") {
              outputTem.splice(i, 1);
            }
          }
          this.variantList.push({
            check: "true",
            variant: outputTem.join("/"),
            price: 0,
            SKU: "",
            Barcode: "",
          });
        }
      }
      this.$emit("getListVariant", this.variantList);
    },
  },
  computed: {},
};
</script>

<style>
.col-1 .form-control {
  border: none !important;
}
.variant {
  margin: 10px 0px;
}
.btn-add {
  margin: 30px 0px;
}
.btn-add a {
  margin: 20px 0px;
  border: 1px solid #8b8888;
  padding: 5px 10px;
  border-radius: 5px;
}
.option-list {
  margin: 15px 0px !important;
}
.btn-add a:hover,
.btn-add a:active {
  /* margin: 20px 0px;
  border: 1px solid #8b8888;
  padding: 5px 10px;
  border-radius: 5px; */
  background-color: rgb(209, 208, 207);
}
.variant-list-header .form-control {
  width: 90% !important;
}
.tag-parent {
  position: relative;
}
.tag {
  position: absolute;
  background-color: aquamarine;
  top: 20%;
  left: 10%;
}
</style>

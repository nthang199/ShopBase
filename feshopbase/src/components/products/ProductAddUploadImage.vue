<template>
  <div class="upload-iamge">
    <div>
      <h5>Image ({{ images.length }}/250)</h5>
      <div class="upload">
        <input
          style="display:none"
          class="hidden"
          id="file"
          type="file"
          ref="files"
          name="image"
          @change="imagesChanged"
          multiple
        />
        <label for="file" class="choosefile">Choose a file</label>
      </div>
    </div>
    <div class="row">
      <div class="col-3" v-for="(image, index) in images" v-bind:key="index">
        <div
          class="background-image"
          v-bind:style="{ backgroundImage: 'url(' + listPicture[index] + ')' }"
          v-on:mouseenter="mouseover(index)"
        >
          <div
            v-on:mouseleave="mouseout"
            class="background-hover center"
            v-if="isHover == index"
          >
            <span>
              <a @click="deleteImage(index)"> <i class="fas fa-eye"></i> </a
            ></span>
            <span>
              <a @click="deleteImage(index)">
                <i class="fas fa-trash-alt"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadImage",
  data() {
    return {
      images: [],
      listPicture: [],
      isHover: null,
    };
  },
  methods: {
    imagesChanged(e) {
      for (let i = 0; i < this.$refs.files.files.length; i++) {
        this.images.push(this.$refs.files.files[i].name);
        let image = e.target.files[i];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.listPicture.push(e.target.result);
        };
        this.$emit("image", this.images, this.listPicture);
      }
    },
    mouseover(index) {
      this.isHover = index;
    },
    mouseout() {
      this.isHover = null;
    },
    deleteImage(index) {
      this.images.splice(index, 1);
      this.listPicture.splice(index, 1);
    },
  },
  components: {},
};
</script>

<style>
.upload-iamge .row {
  width: 100%;
}
.center {
  display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
}

.upload-iamge h5 {
  width: 50%;
  float: left;
}
.upload {
  float: right;
}
.upload-iamge .col-3 {
  padding: 2px 2px !important;
  margin: 0px;
  width: 25%;
}
.background-image {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  background-image: linear-gradient(rgba(24, 92, 54, 0.85));
}
.background-hover {
  width: 100%;
  height: 150px;
  background-color: rgba(27, 26, 26, 0.8);
}
.background-hover span,
.background-hover span:hover {
  color: white;
}
.background-hover span {
  margin: 10px;
}
.choosefile {
  color: #0093ed;
}
.choosefile:hover {
  text-decoration: underline;
  color: #0093ed;
}
</style>

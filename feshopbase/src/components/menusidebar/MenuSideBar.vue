<template>
  <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <div class="row">
          <div class="col-9">
            <img v-bind:src="shopInfo.logo" alt="" />
          </div>
          <div class="col-2">
            <a href="#"><i class="fas fa-bell"></i></a>
          </div>
        </div>
        <div class="shop-name">
          <h5>
            {{ shopInfo.name }}
          </h5>
        </div>
      </div>
      <div class="sidebar-list">
        <ul class="lisst-unstyled components" style="padding:0; width=90%">
          <li
            class="active"
            v-for="(itemmenu, index) in menu"
            v-bind:key="index"
            @click="activeMenu(index)"
          >
            <div class="row itemparentmenu">
              <a v-bind:href="'#' + itemmenu.title" class="col-1"
                ><i class="fas fa-home"></i
              ></a>
              <router-link
                v-bind:to="itemmenu.path"
                data-toggle="collapse"
                aria-expanded="false"
                class="col-9"
                >{{ itemmenu.title }}</router-link
              >
            </div>
            <div
              class="submenu"
              v-if="index == menuActive"
              data-ride="carousel"
              data-aos="zoom-in"
              data-delay="100"
            >
              <ul v-if="itemmenu.submenu.length > 0">
                <li
                  v-for="(itemsubmenu, indexsubmenu) in itemmenu.submenu"
                  v-bind:key="indexsubmenu"
                  class="submenuitem"
                  @click="setSubmenuActive(indexsubmenu)"
                >
                  <div class="row">
                    <router-link
                      class="col-12"
                      v-bind:class="{
                        submenubg: indexsubmenu == submenuActive,
                      }"
                      v-bind:parentmenu="menuActive"
                      v-bind:to="itemsubmenu.path"
                      data-toggle="collapse"
                      aria-expanded="false"
                      style=""
                      >{{ itemsubmenu.title }}</router-link
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer fixed-bottom">
        <div class="sidebar-footer-info">
          <div class="row">
            <div class="col-3">
              <a href="#"><i class="far fa-user"></i></a>
            </div>
            <div class="col-9">
              <p>User name</p>
              <p>User name</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "menu",
  props: {
    menu: {
      type: Array,
      default: null,
    },
    shopInfo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      menuActive: 0,
      submenuActive: 0,
    };
  },
  methods: {
    activeMenu(index) {
      if (index != this.menuActive) {
        this.menuActive = index;
        this.submenuActive = 0;
      }
      // this.$emit("titlemenu", this.menu[index]);
    },
    setSubmenuActive(indexsubmenu) {
      this.submenuActive = indexsubmenu;
    },
  },
  computed: {},
};
</script>

<style>
ul {
  text-align: left;
  padding: 0;
}
.sidebar-header {
  height: 25%;
  width: 100%;
  border-bottom: 1px solid #8b8888;
  padding: 15%;
}
.sidebar-footer {
  height: 10%;
  width: 100%;
  bottom: 0;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #8b8888;
  padding-left: 5px;
}
#sidebar,
.wrapper {
  height: 100%;
}
.sidebar-list {
  height: 65%;
  overflow-y: scroll !important;
  overflow-x: hidden;
  padding: 10% 0;
  display: flex;
  align-content: center;
  justify-content: center;
}
.fixed-bottom,
.fixed-top {
  width: 19%;
}
ul {
  list-style: none;
}
.fixed-bottom {
  position: relative;
}
.parentmenu:hover .submenu ul {
  display: block;
}
.itemparentmenu {
  height: 40px;
}
.row a,
.row a:hover,
.row a:active {
  font-size: 18px;
  color: #5b676e;
  text-decoration: none;
  font-weight: 600;
}
.submenu {
  margin: 0px auto !important;
  align-self: center;
}
.submenuitem {
  margin: 3px auto !important;
  align-self: center;
  border-radius: 5px;
}

.submenu li a,
.submenu li a:hover,
.submenu li a:active {
  font-size: 16px;
  font-weight: normal;
  color: #5b676e;
}
.submenu li:hover a {
  background-color: #dfd9d9;
  border-radius: 5px;
  text-decoration: none;
}
.col-9 img {
  width: 120%;
  height: auto;
}
.col-2 i {
  font-size: 20px;
}
.col-12 {
  text-align: center;
}
.shop-name {
  padding: 10%;
}
.submenubg {
  background-color: rgb(98, 208, 241);
  border-radius: 5px;
}
.sidebar-footer-info {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5%;
}
.sidebar-footer-info .row {
  width: 70%;
}
.sidebar-footer-info .col-3 a i {
  font-size: 20px;
}
.sidebar-footer-info .col-3 {
  display: flex;
  align-content: center;
  justify-content: center;
}
.sidebar-footer-info .col-9 p {
  margin: 0;
  font-size: 15px;
}
</style>

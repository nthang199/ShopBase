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
      <div class="sidebar-list" style="border-bottom:1px solid #ccc;">
        <ul class="list-unstyled components" style="padding:0; ">
          <li
            class="active "
            v-for="(itemmenu, index) in menu"
            v-bind:key="index"
            @click="activeMenu(index)"
          >
            <div class="row itemparentmenu">
              <span
                ><router-link
                  v-bind:to="itemmenu.path"
                  data-toggle="collapse"
                  aria-expanded="false"
                  ><span class="col-1" v-html="itemmenu.icon"></span>
                  <span> {{ itemmenu.title }}</span></router-link
                ></span
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
                      class=" col-12"
                      v-bind:class="{
                        submenubg: indexsubmenu == submenuActive,
                      }"
                      v-bind:parentmenu="menuActive"
                      v-bind:to="itemsubmenu.path"
                      data-toggle="collapse"
                      aria-expanded="false"
                      >{{ itemsubmenu.title }}</router-link
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer " @click="popupForm">
        <div class="sidebar-footer-info">
          <span class="sidebar-footer-info-left"
            ><img
              class="img-circle"
              src="https://admin-cdn.shopbase.com/28891e5300/img/avatar-default.06c91d5e.svg"
              alt=""
          /></span>
          <span class="sidebar-footer-info-right">
            <p>ten</p>
            <p>email</p>
          </span>
          <div class="infor-user" v-if="inforActive">
            <MenuSideBarInfor></MenuSideBarInfor>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuSideBarInfor from "./components/MenuSideBarInfor";
export default {
  name: "menusidebar",
  props: {
    menu: {
      type: Array,
      default: null,
    },
    shopInfo: {
      type: Object,
      default: null,
    },
    listProducts: Array,
  },
  data() {
    return {
      menuActive: 0,
      submenuActive: 0,
      inforActive: false,
    };
  },
  methods: {
    activeMenu(index) {
      if (index != this.menuActive) {
        this.menuActive = index;
        this.submenuActive = 0;
      }
      // console.log(this.listProducts.length);
      // this.$emit("titlemenu", this.menu[index]);
    },
    setSubmenuActive(indexsubmenu) {
      // console.log(this.listProducts.length);
      this.submenuActive = indexsubmenu;
    },
    popupForm() {
      this.inforActive = !this.inforActive;
    },
  },
  computed: {},
  components: { MenuSideBarInfor },
};
</script>

<style>
#sidebar,
.wrapper {
  height: 100%;
}
ul {
  text-align: left;
  padding: 0;
}
.sidebar-header {
  height: 22%;
  width: 100%;
  border-bottom: 1px solid #8b8888;
  padding: 25% 20%;
}
.sidebar-footer {
  height: 15%;
  width: 100%;
  bottom: 0;
  padding: 0 0;
  margin: 0;
}
.sidebar-footer-info {
  margin: 0 15%;
  margin-top: 10%;
}
.sidebar-footer-info-left {
  float: left;
  padding-right: 8px;
}
.sidebar-footer-info-left img {
  padding: 5px;
  border-radius: 10px !important;
}
.sidebar-footer-info-left p {
  margin: 0;
  padding: 0;
  font-size: 13px;
}
.sidebar-footer-info-right {
}
.sidebar-footer-info-right p {
  margin: 0;
  padding: 0;
  font-size: 15px;
}
.infor-user {
  position: fixed;
  bottom: 4%;
  left: 16%;
}
.sidebar-list {
  height: 63%;
  overflow-y: scroll !important;
  overflow-x: hidden;
  padding: 5% 0;
  display: flex;
  align-content: center;
  justify-content: center;
}
.mdi {
  text-align: center !important;
}
.list-unstyled {
  width: 80%;
}

.fixed-top {
  width: 19%;
}
ul {
  list-style: none;
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
  font-size: 16px;
  color: #5b676e;
  text-decoration: none;
  font-weight: 550;
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
  padding-left: 5px;
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
</style>

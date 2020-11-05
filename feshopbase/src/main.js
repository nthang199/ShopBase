import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import CKEditor from '@ckeditor/ckeditor5-vue';
import AOS from "aos";
// import Vuetify from 'vuetify/lib'
// Vue.use(Vuetify);
Vue.use( CKEditor );
import "aos/dist/aos.css";
import '@mdi/font/css/materialdesignicons.css' 
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./main.css";
import BootstrapVue from "bootstrap-vue";
import { BootstrapVueIcons, BIcon } from "bootstrap-vue";
import VueMoment from "vue-moment";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const moment = require("moment");
require("moment/locale/th");

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component("BIcon", BIcon);
Vue.use(VueAxios, axios)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueMoment, {
  moment,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

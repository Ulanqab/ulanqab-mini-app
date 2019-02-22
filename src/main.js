import Vue from 'vue';
import App from './App.vue';
import store from './store/Store';

Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();

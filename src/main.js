import Vue from 'vue'
import { CardPlugin,BadgePlugin,ButtonPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin);
Vue.use(BadgePlugin);
Vue.use(ButtonPlugin);


import App from './App.vue'

Vue.config.productionTip = false
import './style.scss';

new Vue({
  render: h => h(App),
}).$mount('#app')

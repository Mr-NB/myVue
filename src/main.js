import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = "http://123.57.35.11:8086/api"
Vue.prototype.$http = axios


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
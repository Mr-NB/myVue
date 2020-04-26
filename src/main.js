import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.withCredentials = true
Vue.prototype.$http = request


function request({ url, method = "get", params = {}, successmMessage = "", errorMessage = "", showMessage = true }) {

    return axios({
        method: method,
        url: url,
        data: params,
        headers: {

            "Authorization": store.state.user.token
        }

    }).then(res => {

        if (res.status != 200) {
            this.$notify({
                title: "提示",
                message: "HTTP ERROR",
                type: "error",
                duration: 1000
            });
        } else {
            let data = res.data
            if (data.code != 200) {
                if (data.code == 401) {
                    window.localStorage.removeItem('token')

                    this.$router.push('/login')
                } else {
                    this.$notify({
                        title: "提示",
                        message: errorMessage || data.message,
                        type: "error",
                        duration: 1000

                    });
                    return data
                }


            } else {
                if (showMessage) {
                    this.$notify({
                        title: "提示",
                        message: successmMessage || data.message,
                        type: "success",
                        duration: 1000

                    });
                }

                return data.data
            }
        }
    })
};





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
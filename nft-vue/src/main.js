import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import globalAPI from './config/globalAPI'

Vue.prototype.$globalAPI = globalAPI
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
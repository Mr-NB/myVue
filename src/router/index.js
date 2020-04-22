import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'App',

    },

    {
        path: '/xigua',
        name: 'Xigua',
        component: () =>
            import ('../views/xigua.vue')
    }



]

const router = new VueRouter({
    linkActiveClass: "active",
    routes
})

export default router
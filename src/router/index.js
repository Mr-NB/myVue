import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRouter from './admin'
import userRouter from './user'
import toolRouter from './tool'
import store from '@/store'
import commonRouter from './common'


Vue.use(VueRouter)



const router = new VueRouter({
        mode: 'history',
        linkActiveClass: "active",
        routes: [
            adminRouter,
            userRouter,
            toolRouter,
            commonRouter,

            {
                path: '/logout',
                redirect: "/login"

            },
            {
                path: '/login',
                name: "Login",
                component: () =>
                    import ('@/views/common/Login'),
                meta: {

                    title: 'Login'
                }

            }


        ]


    }

)


router.beforeEach((to, from, next) => {

    if (to.matched.length === 0) {
        if (window.localStorage.getItem('role') == 1) {
            next('/admin')
        } else { next('/common') }

    }
    document.title = `${to.meta.title} | I Am Future`;
    if (!window.localStorage.getItem('token')) {

        store.state.user.token = ''
        window.localStorage.removeItem('config')

        if (to.name !== "Login") { next('/login') } else { next() }

    } else {
        console.log('beforeEach token exists')
        if (to.name == "Login") {
            next('/index')

        } else {
            next()

        }

    }


})




export default router
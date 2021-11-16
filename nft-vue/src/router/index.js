import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MusicPage from '../views/MusicPage.vue'
import Calendar from '../views/Calendar.vue'
import CardPage from '../views/CardPage.vue'
import ShopPage from '../views/ShopPage.vue'
import AssetPage from '../views/AssetPage.vue'
import LoginPage from '../views/Login.vue'
import ResigterPage from '../views/Resigter.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/music',
        name: 'Music',
        component: MusicPage
    },
    {
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/CardPage',
        name: 'CardPage',
        component: CardPage
    },
    {
        path: '/ShopPage',
        name: 'ShopPage',
        component: ShopPage
    },
    {
        path: '/AssetPage',
        name: 'AssetPage',
        component: AssetPage
    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/ResigterPage',
        name: 'ResigterPage',
        component: ResigterPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
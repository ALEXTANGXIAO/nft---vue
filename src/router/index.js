import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MusicPage from '../views/MusicPage.vue'
import Calendar from '../views/Calendar.vue'
import CardPage from '../views/CardPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
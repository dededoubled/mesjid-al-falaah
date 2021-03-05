import Vue from 'vue'
import VueRouter from 'vue-router'

import HalamanUtama from './pages/HalamanUtama/HalamanUtama.vue'

Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'home',
        component: HalamanUtama
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
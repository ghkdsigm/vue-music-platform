import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Recent from '../views/Recent.vue'
import Famous from '../views/Famous.vue'
import SearchResult from '../components/SearchResult.vue'
import KakaoLogin from '../views/KakaoLogin.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/Recent',
        name:'recent',
        component:Recent
    },
    {
        path:'/Famous',
        name:'famous',
        component:Famous
    },
    {
        path:'/SearchResult',
        name:'searchResult',
        component: SearchResult
    },
    {
        path:'/KakaoLogin',
        name:'kakaoLogin',
        component:KakaoLogin
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
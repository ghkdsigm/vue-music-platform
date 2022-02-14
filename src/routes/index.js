import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Recent from '../views/Recent.vue'
import Famous from '../views/Famous.vue'
import SearchResult from '../components/SearchResult.vue'

export default createRouter ({
    history:createWebHashHistory(),
    routes:[
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
            name:'searchresult',
            component:SearchResult
        }
    ]
})
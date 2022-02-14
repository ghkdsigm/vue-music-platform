import { createStore } from "vuex"
import famous from './famous'
import music from './music'

export default createStore({
    modules:{
        famous,
        music
    }
})
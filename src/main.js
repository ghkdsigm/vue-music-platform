import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js'
import store from './store/index.js'

createApp(App).use(router).use(store).mount('#app')

window.Kakao.init("26b7918d9aec34a6faaa33e9cdaab3bd"); //카카오 발급 받은 앱키
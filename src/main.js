import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
Vue.use(Vuesax)
library.add(fas)
Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
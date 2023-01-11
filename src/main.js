import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'}
})
  

  

  const store = new Vuex.Store({
    state: {
      services: [],
    },
    getters: {
      services(state){
        return state.services
      },
      getAboutDataById: state => id => {
        const service = state.services.find(el => {
          return el.id == id;
        })
        return service
      }
    },
    mutations: {
      getData (state) {
          return axios.get('/main.json')
          .then(res => state.services = res.data)
          .catch(err => console.log(err))
      },
    },
  })

createApp(App)
.use(store)
.use(router)
.use(vuetify)
.use(VueAxios, axios)
.use()
.mount('#app')

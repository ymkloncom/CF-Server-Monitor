import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import './styles/light.css'

const app = createApp(App)
app.use(router)
app.mount('#app').$nextTick(() => {
  const loading = document.getElementById('loading')
  if (loading) {
    setTimeout(() => {
      loading.remove()
    }, 1000)
  }
})
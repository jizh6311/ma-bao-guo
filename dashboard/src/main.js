import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('quotation-content', {
  data() {
    return {
      keywords: []
    }
  },
  template: `
    <div>
      朋友们好啊,
      我是混元形意太极门掌门人马宝国,
    </div>
  `
})

app.mount('#app')

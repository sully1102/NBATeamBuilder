import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myTop5 from './myTop5.js'

let data = {
  myTop5: myTop5,
  yourTop5: [],
  comments: [],
  something: "something123",
  methods: {

  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

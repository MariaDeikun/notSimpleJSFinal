import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import VueRouter from 'vue-router'
import { initializeApp } from 'firebase/app';




Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App),
  router,

  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyBZze72aqfmU-Z1r_km5k20kKPvk15l-a0",
      authDomain: "mittech-46263.firebaseapp.com",
      databaseURL: "https://mittech-46263-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "mittech-46263",
      storageBucket: "mittech-46263.appspot.com",
      messagingSenderId: "913411280434",
      appId: "1:913411280434:web:029baf653b5c233559762b",
      measurementId: "G-584P0BCCRF"
    };
    initializeApp(firebaseConfig);
  }

}).$mount('#app')


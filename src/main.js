import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as firebase from "firebase";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false;
Vue.use(Vuetify);
  
new Vue({
  router,
  store,
  firebase,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBkJrLRqt0CpTS2metj-FRL6eOxeqlUuEI",
      authDomain: "oneframe-ce302.firebaseapp.com",
      databaseURL: "https://oneframe-ce302.firebaseio.com",
      projectId: "oneframe-ce302",
      storageBucket: "oneframe-ce302.appspot.com",
      messagingSenderId: "774517469600" 
    })
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.dispatch("autoSignIn", user)
      }
      else{
        this.$router.push('/login')
      }
    })
  }
}).$mount("#app");

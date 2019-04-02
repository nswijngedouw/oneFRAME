import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomePage from "./views/HomePage.vue";
import Gallery from "./views/Gallery.vue"
import store from "./store";
import firebase from "firebase";


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login/Login.vue"),

      
    },
    {
      path: "/homepage",
      name: "homepage",
      component: HomePage,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/gallery",
      name: "homepage",
      component: Gallery,
      meta: {
        requiresAuth: true
      }
    }
  ]  
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    var user = firebase.auth().currentUser;    
    if(!user){
      next({
        path: "/login",
        query :{
          redirect: to.fullPath
        }
      });      
    }
    else{
      next(); 
    }
  }
  else{
    next();
  }
})


export default router

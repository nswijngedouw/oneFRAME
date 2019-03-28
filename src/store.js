import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    loginStatus: 'LOGOUT'
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    },
    setLoginStatus(state, payload){
      state.loginStatus = payload;
      console.log(state.loginStatus);
    }
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      commit('setLoginStatus', 'LOGIN_PENDING')
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {            
            commit('setLoginStatus', 'LOGIN_SUCCESS')
            commit('setUser', user);
            commit('setIsAuthenticated', true);
        })
        .catch(() => {          
            commit('setLoginStatus', 'LOGIN_ERROR')
            commit('setUser', null);
            commit('setIsAuthenticated', false);
        });
    },
    
  }
});

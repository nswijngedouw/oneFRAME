<template>
 
  <div id="app">   
   <Navbar />
   <v-content>
   <router-view />
   </v-content>
  </div>
</template>

<script>
import Navbar from "./views/Navigation/NavigationDrawer"
export default {
    components: {
        Navbar
    }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  @import '/main'
</style>

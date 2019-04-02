<template>
    <nav>
        <v-toolbar flat app class="blue lighten-1">
            <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
             <v-toolbar-title>
                    <router-link to="/" tag="span" style="cursor : pointer">OneFRAME</router-link>
            </v-toolbar-title> 
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                 <v-btn dark flat v-for="item in menuItems" :key="item.title" router :to="item.link">
                     <v-icon left dark>{{item.icon}}</v-icon>
                     {{ item.title }}

                 </v-btn>
                 <v-btn v-if="userIsAuthenticated"
                    flat
                    @click="onLogout">
                    <v-icon>exit_to_app</v-icon>
                    Logout
                 </v-btn>
            </v-toolbar-items>
            
        </v-toolbar>
        <v-navigation-drawer temporary="" v-model="drawer" app class="blue lighten-1">
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>                    
                    <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-if="userIsAuthenticated"
                    flat
                    @click="onLogout">
                    <v-list-tile-action><v-icon>exit_to_app</v-icon></v-list-tile-action>                    
                    <v-list-tile-content>Logout</v-list-tile-content>                    
                 </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
  export default {
    name: "NavBar",
    data () {
      return {
          drawer: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
        {icon: 'lock_open', title: 'Login Page', link: '/login'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'collections', title: 'Gallery', link: '/gallery'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
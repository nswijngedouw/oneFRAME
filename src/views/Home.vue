<template>
  <v-container fluid>
      <v-layout justify-space-around>
        <v-flex m5 xs10>
          <v-layout column>
            <v-img :src="require('../assets/logo oneFRAME.png')" aspect-ratio="1.7"></v-img>            
            <HelloWorld msg="Welcome to the OneFRAME app" />
          </v-layout>
        </v-flex>        
      </v-layout>
    </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

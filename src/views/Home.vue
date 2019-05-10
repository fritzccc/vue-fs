<template>
  <v-app>
    <Toolbar />
    <v-layout style="padding-top:72px;" row wrap>
      <v-flex xs8 offset-xs2>
        <List />
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import Toolbar from "../components/Toolbar";
  import List from "../components/List";
  import { mapActions } from "vuex";
  import { db } from '../firebase.js'
  
  export default {
    components:{
      Toolbar,
      List
    },
    mounted(){
      this.getTodos()
    },
    methods:{
      ...mapActions(['getTodos'])
    }
  }
</script>

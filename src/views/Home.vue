<template>
  <v-app>
    <Toolbar />
    <v-layout style="padding-top:72px;" row wrap>
      <v-flex xs8 offset-xs2>
        <AddTodo />
        <div class="pt-2 pd-2"></div>
        <List />
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import Toolbar from "../components/Toolbar";
  import List from "../components/List";
  import AddTodo from "../components/AddTodo";
  import { mapActions } from "vuex";
  
  export default {
    components:{
      Toolbar,
      List,
      AddTodo
    },
    created(){
      this.getTodos()
    },
    methods:{
      ...mapActions(['getTodos'])
    }
  }
</script>

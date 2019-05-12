<template>
  <v-layout row wrap>
    <v-flex xs9 class="pr-3">
      <v-text-field label="add new todo title here..." v-model="newTodo.title"></v-text-field>
    </v-flex>
    <v-flex xs3>
      <v-select v-model="newTodo.priority" :items="options" label="Priority"></v-select>
    </v-flex>
    <v-flex xs12>
      <v-textarea label="todo details" v-model="newTodo.content"></v-textarea>
    </v-flex>
    <v-flex>
      <v-btn class="white--text ml-0" color="teal lighten-1" @click="addTodo(newTodo)">Add Todo</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: {
        title: null,
        priority: 1,
        content: null
      },
      options: [
        { text: "nothing", value: 1 },
        { text: "low", value: 2 },
        { text: "normal", value: 3 },
        { text: "high", value: 4 },
        { text: "emergency", value: 5 }
      ]
    };
  },
  methods: {
    ...mapActions(["addTodo"])
  }
};
</script>

<style>
</style>

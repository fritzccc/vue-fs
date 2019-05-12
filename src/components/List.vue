<template>
  <div>
    <v-card v-for="todo in todos" :key="todo.id" color="blue-grey lighten-5" class="mb-2">
      <v-card-title primary-title>
        <div :class="{finished: todo.finished}">
          <div class="headline">{{ todo.title }}</div>
          <div class="pt-3">{{ todo.content }}</div>
          <div class="pt-2">重要度: {{ todo.priority }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          color="teal lighten-1"
          class="white--text"
          @click="toggleTodo(todo)"
        >{{ todo.finished ? 'Redo' : 'Done'}}</v-btn>
        <v-btn class="error" @click="deleteTodo(todo.id)">delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions(['deleteTodo', 'toggleTodo'])
  }
};
</script>

<style>
.finished > div {
  text-decoration: line-through;
}
</style>

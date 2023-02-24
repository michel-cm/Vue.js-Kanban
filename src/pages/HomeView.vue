<template>
  <div class="container grid-xs py-2">
    <h1 class="logo">Todo</h1>
    <form @submit.prevent="add(todo)">
      <div class="input-group">
        <input
          type="text"
          v-model="todo.description"
          class="form-input"
          placeholder="Nova Tarefa"
        />
        <button class="btn btn-primary input-group-btn" :class="{ loading }">
          Adicionar
        </button>
      </div>
    </form>

    <div class="todoList">
      <TodoItem
        v-for="t in todos"
        :key="t.id"
        @toggle="toggleTodo"
        @remove="removeTodo"
        :todo="t"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: { TodoItem },
  data() {
    return {
      todo: { checked: false },
    };
  },

  computed: {
    ...mapState(["todos", "loading"]),
  },

  methods: {
    ...mapActions(["addTodo", "toggleTodo", "removeTodo"]),

    async add(todo) {
      await this.addTodo(todo);
      this.todo = { checked: false };
    },
  },
};
</script>

<style scoped>
#app {
  height: 100vw;
  background: #f9f9f9;
}
.logo {
  text-align: center;
  margin: 1rem 0;
}

.todoList {
  padding-top: 2rem;
}
</style>

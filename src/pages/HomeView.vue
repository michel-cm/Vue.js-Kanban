<template>
  <div class="container grid-xs py-2">
    <h1 class="logo">Todo</h1>
    <form @submit.prevent="addTodo(todo)">
      <div class="input-group">
        <input
          type="text"
          v-model="todo.description"
          class="form-input"
          placeholder="Nova Tarefa"
        />
        <button class="btn btn-primary input-group-btn">Adicionar</button>
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

export default {
  name: "App",
  components: { TodoItem },
  data() {
    return {
      todos: [],
      todo: { checked: false },
    };
  },
  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
    },

    toggleTodo(todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      if (index > -1) {
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, { ...this.todos[index], checked });
      }
    },
    removeTodo(todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      if (index > -1) {
        this.$delete(this.todos, index);
      }
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

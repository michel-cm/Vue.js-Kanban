<template>
  <div class="container-board">
    <div class="columns">
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Todo</div>
          </div>
          <div class="panel-body">
            <TodoItem
              v-for="todo in uncheckeds"
              :todo="todo"
              :key="todo.id"
              @remove="removeTodo"
              @toggle="toggleTodo"
            />
          </div>
          <div class="panel-footer">
            <button
              v-if="uncheckeds.length"
              @click="checkAll"
              class="btn btn-link float-right"
            >
              Concluir tudo
            </button>
          </div>
        </div>
      </div>
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Done</div>
          </div>
          <div class="panel-body">
            <TodoItem
              v-for="todo in checkeds"
              :todo="todo"
              :key="todo.id"
              @remove="removeTodo"
              @toggle="toggleTodo"
            />
          </div>
          <div class="panel-footer">
            <button
              v-if="checkeds.length"
              @click="removeAllCheckeds"
              class="btn btn-link float-right text-error"
            >
              Remover tudo
            </button>
            <button
              v-if="checkeds.length"
              @click="uncheckAll"
              class="btn btn-link float-right"
            >
              Desmarcar tudo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "KanbanView",
  components: { TodoItem },
  computed: {
    ...mapGetters(["uncheckeds", "checkeds"]),
  },
  methods: {
    ...mapActions([
      "removeTodo",
      "toggleTodo",
      "checkAll",
      "uncheckAll",
      "removeAllCheckeds",
    ]),
  },
};
</script>

<style scoped>
.container-board {
  height: calc(100vh - 50px);
  padding: 10px;
}

.columns {
  height: 100%;
}

.columns .column .panel {
  height: 100%;
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>

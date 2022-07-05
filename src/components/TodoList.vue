<template>
  <div class="todo" data-test="todo-list">
    <VInput v-model="todoInput" data-test="input" />
    <button class="todo__button" data-test="add-button" @click="addTodo">Добавить</button>
    <ul class="todo__list">
      <TodoItem
        v-for="item of todoItems"
        :id="item.id"
        :key="item.id"
        data-test="item"
        class="todo__item"
        :text="item.text"
        :is-complete="item.isComplete"
        @toggle-complete="toggleTodoItem"
        @delete-item="deleteTodoItem"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VInput from '@/components/VInput.vue';
import TodoItem from '@/components/TodoItem.vue';

const todoInput = ref('');
let nextTodoId = 1;

const todoItems = ref([
  { id: nextTodoId++, text: 'first task', isComplete: false },
  { id: nextTodoId++, text: 'second task', isComplete: false },
  { id: nextTodoId++, text: 'third task', isComplete: false },
]);

const addTodo = () => {
  if (todoInput.value) {
    todoItems.value.push({
      id: nextTodoId++,
      text: todoInput.value,
      isComplete: false,
    });
    todoInput.value = '';
  }
};

const toggleTodoItem = id => {
  const el = todoItems.value.find(item => item.id === id);
  el.isComplete = !el.isComplete;
};

const deleteTodoItem = id => {
  todoItems.value = todoItems.value.filter(item => item.id !== id);
};
</script>

<style lang="scss">
.todo {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 450px auto auto;
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;

  &__button {
    all: unset;
    cursor: pointer;

    grid-column: 2 / -1;
    &:hover {
      color: white;
    }
  }
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 10px;
    grid-column: 1 / -1;
  }

  &__item {
  }
}
</style>

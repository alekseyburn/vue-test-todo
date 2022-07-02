<template>
  <li class="todo-item">
    <p class="todo-item__text" :class="{ 'todo-item__text--complete': isComplete }">{{ text }}</p>
    <button class="todo-item__button" @click="$emit('toggleComplete', id)">✓</button>
    <button class="todo-item__button" @click="$emit('deleteItem', id)">X</button>
  </li>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    default: null,
  },
});
defineEmits(['toggleComplete', 'deleteItem']);
</script>

<style lang="scss">
.todo-item {
  display: grid;
  grid-template-columns: 450px auto auto;
  gap: 20px;
  color: white;

  &__button {
    all: unset;
    cursor: pointer;
  }

  &__text {
    max-width: 450px;
    &--complete {
      border-color: green !important;
      text-decoration: line-through;
    }
  }

  &__text,
  &__button {
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 5px;
  }
}
</style>

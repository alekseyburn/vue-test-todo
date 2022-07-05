<template>
  <label class="v-input">
    <input
      data-test="input"
      class="v-input__value"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [Number, String],
    default: '',
  },
});
defineEmits(['update:modelValue']);
</script>

<style lang="scss">
.v-input {
  &__value {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
}
</style>

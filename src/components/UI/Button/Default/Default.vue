<script setup lang="ts">
type Props = { outlineOnClink?: boolean };
const { outlineOnClink = true } = defineProps<Props>();
</script>

<template>
  <button class="ui-button" :class="{ 'button-outline': outlineOnClink }">
    <span v-if="$slots['start-icon']" class="icon-slot">
      <slot name="start-icon" />
    </span>

    <p class="button-text">
      <slot />
    </p>

    <span v-if="$slots['end-icon']" class="icon-slot">
      <slot name="end-icon" />
    </span>
  </button>
</template>

<style scoped>
.ui-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  border-radius: 0.5625rem;
  background-color: #e39b34;
  color: #f7f7f7;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.ui-button:disabled {
  background-color: #e39b34;
  opacity: 0.5;
  cursor: not-allowed;
}

.button-outline:focus,
.button-outline:focus-within {
  box-shadow: 0 0 0.5px 5px rgba(227, 155, 52, 0.3);
  outline: none;
}

.icon-slot {
  width: 1.25rem; /* w-5 equivalente */
  display: flex;
  justify-content: center;
}

.button-text {
  flex: 1;
}
</style>

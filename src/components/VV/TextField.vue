<script setup lang="ts">
type TextFieldProps = {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
};

const {
  id = "input-" + Math.random().toString(36).substring(2, 9),
  label,
  type = "text",
  placeholder = "",
  disabled = false,
} = defineProps<TextFieldProps>();

const inputValue = defineModel<string | number>({
  required: false,
  default: "",
});
</script>

<template>
  <div class="input-base">
    <label v-if="label" :for="id">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      :disabled="disabled"
    />

    <div v-if="$slots['default']" class="slot-icon">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.input-base {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  min-height: 3rem; /* 48px */
  border: 2px solid #3d3d3d;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  background-color: white;
  transition: border 0.2s;
}

.input-base:focus-within {
  border-color: #e39b34;
}

.input-base label {
  position: absolute;
  bottom: 2.25rem;
  left: 1.25rem;
  background-color: white;
  padding: 0 0.25rem;
  font-size: 0.813rem;
  font-weight: 600;
  color: #3d3d3d;
  pointer-events: none;
}

.input-base:focus-within label {
  color: #e39b34;
}

.input-base input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  color: #3d3d3d;
  padding: 0.25rem 0;
}

.input-base input::placeholder {
  color: rgba(61, 61, 61, 0.6);
  font-weight: 500;
}

.input-base input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.slot-icon {
  margin-left: 0.5rem;
  width: 1rem;
  height: 1rem;
  color: #3d3d3d;
}
</style>

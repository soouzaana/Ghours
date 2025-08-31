<script setup lang="ts">
import { PropType, defineEmits } from "vue";

// Props: colunas, dados e ações
type Column = { key: string; label: string };
type Action = { icon: any; name: string; handler: (row: any) => void };

const props = defineProps<{
  columns: Column[];
  rows: Record<string, any>[];
  actions?: Action[];
}>();

const emits = defineEmits<{
  (e: "action", actionName: string, row: Record<string, any>): void;
}>();
</script>

<template>
  <div class="listagem">
    <table>
      <thead>
        <tr>
          <th v-for="col in props.columns" :key="col.key">{{ col.label }}</th>
          <th v-if="props.actions && props.actions.length">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in props.rows" :key="row.id">
          <td v-for="col in props.columns" :key="col.key">
            {{ row[col.key] }}
          </td>
          <td v-if="props.actions && props.actions.length" class="secao-botoes">
            <button
              v-for="action in props.actions"
              :key="action.name"
              class="action-button"
              @click="action.handler(row)"
            >
              <component :is="action.icon" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.listagem {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 800px;
}

thead {
  background-color: rgba(128, 128, 128, 0.17);
}

th {
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #e39b34;
}

td {
  padding: 0.5rem 0.75rem;
  vertical-align: middle;
  border-bottom: 1px solid rgba(128, 128, 128, 0.17);
}

tbody tr:hover {
  background-color: #fdf6e3;
}

.secao-botoes {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1.5rem 0.5rem;
}

.action-button {
  background-color: transparent;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: background 0.2s, color 0.2s;
}

.action-button:hover {
  background-color: #f7f7f7;
}
</style>

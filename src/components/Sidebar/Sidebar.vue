<script setup>
import { ref } from "vue";
import Home from "../Icons/Home.vue";
import Report from "../Icons/Report.vue";
import Hamburguer from "../Icons/Hamburguer.vue";
import AddPeople from "../Icons/AddPeople.vue";
import Calendar from "../Icons/Calendar.vue";
import Peoples from "../Icons/Peoples.vue";
import Settings from "../Icons/Settings.vue";
import Exit from "../Icons/Exit.vue";

//itens da sidebar
const source = ref([
  { icon: Hamburguer, label: "Menu" },
  { icon: Home, label: "Início" },
  { icon: Report, label: "Relatórios" },
  { icon: AddPeople, label: "Clientes" },
  { icon: Calendar, label: "Agendamentos" },
  { icon: Peoples, label: "Funcionários" },
]);

//itens da sidebar bottom
const bottomSource = ref([
  { icon: Settings, label: "Configurações" },
  { icon: Exit, label: "Sair" },
]);
</script>

<template>
  <nav class="sidebar">
    <ul>
      <li v-for="(item, index) in source" :key="index" class="sidebar-item">
        <span class="icon">
          <template v-if="typeof item.icon === 'string'">{{
            item.icon
          }}</template>
          <component v-else :is="item.icon" />
        </span>
      </li>

      <li
        v-for="(item, index) in bottomSource"
        :key="index"
        class="sidebar-bottom"
      >
        <span class="icon">
          <template v-if="typeof item.icon === 'string'">{{
            item.icon
          }}</template>
          <component v-else :is="item.icon" />
        </span>
      </li>
    </ul>
  </nav>
</template>

<style>
.sidebar {
  width: 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e39b34;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  display: flex;
  margin-bottom: 10px;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}

.sidebar-bottom {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}

.sidebar-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.icon {
  margin-right: 10px;
  font-size: 1rem;
  color: #f7f7f7;
}

.label {
  font-weight: bold;
  color: #191817;
}
</style>

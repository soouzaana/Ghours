<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Home from "../Icons/Home.vue";
import Report from "../Icons/Report.vue";
import Hamburguer from "../Icons/Hamburguer.vue";
import AddPeople from "../Icons/AddPeople.vue";
import Calendar from "../Icons/Calendar.vue";
import Peoples from "../Icons/Peoples.vue";
import Settings from "../Icons/Settings.vue";
import Exit from "../Icons/Exit.vue";

const router = useRouter();

const topItems = ref([
  { icon: Home, label: "Início", path: "/" },
  { icon: Report, label: "Relatórios", path: "/relatorios" },
  { icon: AddPeople, label: "Clientes", path: "/clientes" },
  { icon: Calendar, label: "Agendamentos", path: "/agendamentos" },
  { icon: Peoples, label: "Funcionários", path: "/funcionarios" },
]);

const bottomItems = ref([
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
  { icon: Exit, label: "Sair", path: "/logout" },
]);

const activeIndex = ref<number | null>(null);
const isExpanded = ref(false);
const isHover = ref(false);

const setActive = (index: number, path: string) => {
  activeIndex.value = index;
  router.push(path);
};

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <nav
    class="sidebar"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    :class="{ expanded: isExpanded || isHover }"
  >
    <!-- botão de toggle -->
    <div class="top-section">
      <div class="toggle" @click="toggleSidebar">
        <component :is="Hamburguer" class="icon" />
      </div>

      <ul class="top">
        <li
          v-for="(item, index) in topItems"
          :key="index"
          class="sidebar-item"
          :class="{ active: activeIndex === index }"
          @click="setActive(index, item.path)"
        >
          <component :is="item.icon" class="icon" />
          <span class="label">{{ item.label }}</span>
        </li>
      </ul>
    </div>

    <ul class="bottom">
      <li
        v-for="(item, index) in bottomItems"
        :key="index"
        class="sidebar-item"
        @click="router.push(item.path)"
      >
        <component :is="item.icon" class="icon" />
        <span class="label">{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80px;
  height: 100vh;
  background-color: #e39b34;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 5px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: width 0.5s ease;
}

.sidebar.expanded {
  width: 200px;
}

.toggle {
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-top: 3.5rem;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
}

.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-bottom: 15px;
}

.sidebar-item {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.sidebar-item:hover {
  background-color: #808080;
  border-radius: 10px;
}

.active {
  background-color: #808080;
  border-radius: 10px;
}

.icon {
  font-size: 24px;
  color: #fff;
  flex-shrink: 0;
}

.label {
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
  font-weight: 500;

  max-width: 0;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.5s ease, opacity 0.5s ease;
}

.sidebar.expanded .label {
  max-width: 200px;
  opacity: 1;
}

ul {
  padding-inline-start: 20px;
}
</style>

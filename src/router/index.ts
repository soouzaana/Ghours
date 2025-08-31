import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../components/Section/Inicio/Inicio.vue";
import Agendamentos from "../components/Section/Agendamentos/Agendamento.vue";

const routes = [
  // { path: "/", component: Inicio },
  { path: "/agendamento", component: Agendamentos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

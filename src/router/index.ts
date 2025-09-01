import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../components/Section/Inicio/Inicio.vue";
import Agendamentos from "../components/Section/Agendamentos/Agendamento.vue";
import Relatorios from "../components/Section/Relatorios/Relatorios.vue";
import Clientes from "../components/Section/Clientes/Clientes.vue";
import Funcionarios from "../components/Section/Funcionarios/Funcionarios.vue";
import Quadras from "../components/Section/Quadras/Quadras.vue";
import path from "path";

const routes = [
  { path: "/", component: Agendamentos },
  { path: "/relatorios", component: Relatorios },
  { path: "/clientes", component: Clientes },
  { path: "/agendamentos", component: Agendamentos },
  { path: "/funcionarios", component: Funcionarios },
  { path: "/quadras", component: Quadras },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
